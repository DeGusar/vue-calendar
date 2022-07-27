<template>
  <form
    class="registration-page-form"
    novalidate
    @submit.prevent="submit"
  >
    <p class="registration-page-form__title">
      Sign up to Vue-calendar
    </p>
    <div class="registration-page-form__names">
      <InputComponent
        v-model="firstName"
        class="registration-page-form__names__input"
        place-holder="First Name"
      />
      <InputComponent
        v-model="lastName"
        class="registration-page-form__names__input"
        place-holder="Last Name"
      />
    </div>

    <InputComponent
      v-model="email"
      type="email"
      place-holder="Email address"
    />
    <InputComponent
      v-model="password"
      type="password"
      place-holder="Password"
    />
    <ButtonComponent
      type="submit"
      class="registration-page-form__button"
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
import { urlNames } from '@/utils/constants'
import { InputComponent, ButtonComponent, RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'RegistrationPageForm',
  components: { InputComponent, ButtonComponent, RouterLinkComponent },

  data: () => ({
    routeLoginPage: { name: urlNames.LOGIN_PAGE },
    routeMainPage: { name: urlNames.MAIN_PAGE },
    firstName: '',
    lastName: '',
    email: '',
    password: ''

  }),

  methods: {
    submit (e) {
      console.log({ firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password })
      localStorage.setItem('isAuthorised', 'true')
      this.$router.push(this.routeMainPage)
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
