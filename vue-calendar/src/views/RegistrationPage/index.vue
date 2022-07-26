<template>
  <div class="registration-page">
    <form
      action=""
      class="registration-page__form"
    >
      <p class="registration-page__form__title">
        Sign up to Vue-calendar
      </p>
      <div class="registration-page__form__names">
        <InputComponent
          class="registration-page__form__names__input"
          :value="firstName"
          place-holder="First Name"
        />
        <InputComponent
          class="registration-page__form__names__input"
          :value="lastName"
          place-holder="Last Name"
        />
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
        class="registration-page__form__button"
      >
        SignUP
      </ButtonComponent>
      <RouterLinkComponent
        class="registration-page__form__link"
        :to="routeLoginPage"
      >
        Already have an account? Sign in
      </RouterLinkComponent>
    </form>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { InputComponent, ButtonComponent, RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'RegistrationPage',
  components: { InputComponent, ButtonComponent, RouterLinkComponent },

  data: () => ({
    routeLoginPage: { name: urlNames.LOGIN_PAGE },
    firstName: '',
    lastName: '',
    email: '',
    password: ''

  })
}
</script>

<style lang="scss">
.registration-page {
  &__form {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    padding: 10px;
    row-gap: 20px;
    margin: 10px auto;

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
    }
  }
}
</style>
