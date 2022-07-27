<template>
  <form
    class="login-page-form"
    novalidate
    @submit.prevent="submit"
  >
    <div class="login-page-form__header">
      <p class="login-page-form__header__title">
        Already have account?
      </p>
      <p class="login-page-form__header__text">
        Sign in to Vue Calendar!
      </p>
    </div>
    <InputComponent
      :value="email"
      type="email"
      place-holder="Email address"
    />
    <InputComponent
      :value="password"
      type="password"
      place-holder="Password"
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
import { urlNames } from '@/utils/constants'
import { ButtonComponent, InputComponent, RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'LoginPageForm',
  components: { ButtonComponent, InputComponent, RouterLinkComponent },

  data: () => ({
    routeRegistrationPage: { name: urlNames.REGISTRATION_PAGE },
    email: '',
    password: ''
  })

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
