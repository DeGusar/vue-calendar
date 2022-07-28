<template>
  <form
    class="registration-page-form"
    novalidate
    @submit.prevent="submitRegistration"
  >
    <p class="registration-page-form__title">
      Sign up to Vue-calendar
    </p>
    <div class="registration-page-form__names">
      <InputComponentWithErrorText
        v-model="firstName"
        class="registration-page-form__names__input"
        place-holder="First Name"
        :invalid="v$.firstName.$error"
        :errors="v$.firstName.$errors"
      />
      <InputComponentWithErrorText
        v-model="lastName"
        class="registration-page-form__names__input"
        place-holder="Last Name"
        :invalid="v$.lastName.$error"
        :errors="v$.lastName.$errors"
      />
    </div>

    <InputComponentWithErrorText
      v-model="email"
      type="email"
      place-holder="Email address"
      :invalid="v$.email.$error"
      :errors="v$.email.$errors"
    />
    <InputComponentWithErrorText
      v-model="password"
      type="password"
      place-holder="Password"
      :invalid="v$.password.$error"
      :errors="v$.password.$errors"
    />
    <InputComponentWithErrorText
      v-model="passwordConfirm"
      type="password"
      place-holder="Confirm Password"
      :invalid="v$.passwordConfirm.$error"
      :errors="v$.passwordConfirm.$errors"
    />
    <ButtonComponent
      type="submit"
      class="registration-page-form__button"
      :disabled="v$.$error"
    >
      SignUP
    </ButtonComponent>
    <RouterLinkComponent
      class="registration-page-form__link"
      :to="routeLoginPage"
    >
      Already have an account? Sign in
    </RouterLinkComponent>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { registrateUser } from '@/utils/api/authApi'
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators'
import { urlNames } from '@/utils/constants'
import { ButtonComponent, RouterLinkComponent, InputComponentWithErrorText } from '@/components/basicComponents'

export default {
  name: 'RegistrationPageForm',
  components: { ButtonComponent, RouterLinkComponent, InputComponentWithErrorText },
  setup: () => ({ v$: useVuelidate() }),

  data: () => ({
    routeLoginPage: { name: urlNames.LOGIN_PAGE },
    routeMainPage: { name: urlNames.MAIN_PAGE },
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''

  }),
  validations () {
    return {
      firstName: { required: helpers.withMessage('Please specify first name', required) },
      lastName: { required: helpers.withMessage('Please specify last name', required) },
      email: { required: helpers.withMessage('Please specify email', required), email },
      password: { required: helpers.withMessage('Please enter password', required), minLength: minLength(1) },
      passwordConfirm: { required: helpers.withMessage('Please confirm password', required), sameAsPassword: sameAs(this.password) }
    }
  },

  methods: {
    async submitRegistration () {
      this.v$.$validate()

      if (!this.v$.$error) {
        try {
          await registrateUser({ firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password })
          this.$router.push(this.routeMainPage)
        } catch (e) {
          console.log(e.message)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.registration-page-form {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  row-gap: 20px;
  margin: 70px auto;

  &__title {
    font-size: $font-size-large;
  }

  &__names {
    width: 100%;
    display: flex;
    column-gap: 15px;

    &__input {
      width: (50% -15px);
    }
  }

  &__button {
    width: 100%;
  }

  &__link {
    font-size: $font-size-small;
    align-self: end;
    margin-top: -5px;
    text-decoration-line: underline;
    color: $color-purple;

    &:hover {
      color: $color-purple-dark;
    }
  }
}
</style>
