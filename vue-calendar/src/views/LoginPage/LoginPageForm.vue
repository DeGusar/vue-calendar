<template>
  <form
    class="login-page-form"
    novalidate
    @submit.prevent="submitLogin"
  >
    <div class="login-page-form__header">
      <p class="login-page-form__header__title">
        Already have account?
      </p>
      <p class="login-page-form__header__text">
        Sign in to Vue Calendar!
      </p>
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
    <ButtonComponent
      type="submit"
      class="login-page-form__button"
    >
      SignIN
    </ButtonComponent>
    <RouterLinkComponent
      class="login-page-form__link"
      :to="routeRegistrationPage"
    >
      Don't have an account? Sign Up
    </RouterLinkComponent>
  </form>
</template>

<script>
import { login } from '@/utils/api/authApi'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { urlNames } from '@/utils/constants'
import { ButtonComponent, InputComponentWithErrorText, RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'LoginPageForm',
  components: { ButtonComponent, InputComponentWithErrorText, RouterLinkComponent },

  setup: () => ({ v$: useVuelidate() }),

  data: () => ({
    routeRegistrationPage: { name: urlNames.REGISTRATION_PAGE },
    routeMainPage: { name: urlNames.MAIN_PAGE },
    email: '',
    password: ''
  }),
  validations () {
    return {
      email: { required: helpers.withMessage('Please enter email', required) },
      password: { required: helpers.withMessage('Please enter password', required) }
    }
  },
  methods: {
    async submitLogin () {
      this.v$.$validate()

      if (!this.v$.$error) {
        try {
          await login({ email: this.email, password: this.password })
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
  .login-page-form {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 20px;
    margin: 70px auto;

    &__header {
      &__title {
        font-size: $font-size-large;
      }

      &__text {
        font-size: $font-size-small;
      }
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

    &__button {
      width: 100%;
    }
  }
</style>
