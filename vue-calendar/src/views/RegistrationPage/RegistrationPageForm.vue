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
        class="registration-page-form__names-input"
        place-holder="First Name"
        :invalid="$v.firstName.$error"
        :error-message="firstNameError"
      />
      <InputComponentWithErrorText
        v-model="lastName"
        class="registration-page-form__names-input"
        place-holder="Last Name"
        :invalid="$v.lastName.$error"
        :error-message="lastNameErrors"
      />
    </div>

    <InputComponentWithErrorText
      v-model="email"
      type="email"
      place-holder="Email address"
      :invalid="$v.email.$error"
      :error-message="emailErrors"
    />
    <InputComponentWithErrorText
      v-model="password"
      type="password"
      place-holder="Password"
      :invalid="$v.password.$error"
      :error-message="passwordError"
    />
    <InputComponentWithErrorText
      v-model="passwordConfirm"
      type="password"
      place-holder="Confirm Password"
      :invalid="$v.passwordConfirm.$error"
      :error-message="passwordConfirmError"
    />
    <ButtonComponent
      type="submit"
      class="registration-page-form__button"
      :disabled="$v.$error"
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
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import { urlNames } from '@/utils/constants'
import { ButtonComponent, RouterLinkComponent, InputComponentWithErrorText } from '@/components/basicComponents'

export default {
  name: 'RegistrationPageForm',
  components: { ButtonComponent, RouterLinkComponent, InputComponentWithErrorText },

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
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      passwordConfirm: { required, sameAsPassword: sameAs('password') }
    }
  },

  computed: {
    firstNameError () {
      return this.$v.firstName.$error && !this.$v.firstName.required ? 'Please specify first name' : ''
    },
    lastNameErrors () {
      return this.$v.firstName.$error && !this.$v.firstName.required ? 'Please specify first name' : ''
    },
    emailErrors () {
      if (this.$v.email.$error && !this.$v.email.required) {
        return 'Please specify email'
      }

      if (this.$v.email.$error && !this.$v.email.email) {
        return 'Value is not a valid email address'
      }

      return ''
    },
    passwordError () {
      if (this.$v.password.$error && !this.$v.password.required) {
        return 'Please specify password'
      }

      if (this.$v.password.$error && !this.$v.password.minLength) {
        return `This field should be at least ${this.$v.password.$params.minLength.min} characters long `
      }

      return ''
    },
    passwordConfirmError () {
      if (this.$v.passwordConfirm.$error && !this.$v.passwordConfirm.required) {
        return 'Please confirm password'
      }

      if (this.$v.passwordConfirm.$error && !this.$v.passwordConfirm.sameAsPassword) {
        return 'This value must be equal to password value'
      }

      return ''
    }
  },

  methods: {
    async submitRegistration () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$emit('registration', { firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password })
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
  }

  &__names-input {
    width: (50% -15px);
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
