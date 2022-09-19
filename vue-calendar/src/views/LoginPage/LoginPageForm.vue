<template>
  <form
    class="login-page-form"
    novalidate
    @submit.prevent="submitLogin"
  >
    <div class="login-page-form__header">
      <p class="login-page-form__header-title">
        Already have account?
      </p>
      <p class="login-page-form__header-text">
        Sign in to Vue Calendar!
      </p>
    </div>
    <InputComponentWithErrorText
      v-model="email"
      type="email"
      :invalid="$v.email.$error"
      :error-message="emailError"
      place-holder="Email address"
    />
    <InputComponentWithErrorText
      v-model="password"
      type="password"
      place-holder="Password"
      :invalid="$v.password.$error"
      :error-message="passwordError"
    />
    <ButtonComponent
      type="submit"
      variant="contained"
      :disabled="$v.$error"
      class="login-page-form__button"
    >
      SignIN
    </ButtonComponent>
    <RouterLinkComponent
      :to="routeRegistrationPage"
      class="login-page-form__link"
    >
      Don't have an account? Sign Up
    </RouterLinkComponent>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { urlNames } from '@/utils/constants'
import { ButtonComponent, InputComponentWithErrorText, RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'LoginPageForm',
  components: { ButtonComponent, InputComponentWithErrorText, RouterLinkComponent },

  data: () => ({
    routeRegistrationPage: { name: urlNames.REGISTRATION_PAGE },
    routeMainPage: { name: urlNames.MAIN_PAGE },
    email: '',
    password: ''
  }),
  validations () {
    return {
      email: { required },
      password: { required }
    }
  },
  computed: {
    emailError () {
      return this.$v.email.$error && !this.$v.email.required ? 'Please enter email' : ''
    },
    passwordError () {
      return this.$v.password.$error && !this.$v.password.required ? 'Please enter password' : ''
    }

  },
  methods: {
    async submitLogin () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$emit('login', { email: this.email, password: this.password })
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

    &__header-text {
      font-size: $font-size-small;
    }

    &__header-title {
      font-size: $font-size-large;
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
