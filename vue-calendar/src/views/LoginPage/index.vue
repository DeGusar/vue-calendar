<template>
  <div class="login-page">
    <router-link
      :to="routeMainPage"
    >
      Home
    </router-link>
    <LoginPageForm />
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import LoginPageForm from './LoginPageForm'

export default {
  name: 'LoginPage',
  components: { LoginPageForm },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">
  .login-page {
    padding: 10px;
  }
</style>
