<template>
  <div class="login-page">
    <RouterLinkComponent
      :to="routeMainPage"
    >
      Home
    </RouterLinkComponent>
    <LoginPageForm />
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import LoginPageForm from './LoginPageForm'
import { RouterLinkComponent } from '@/components'

export default {
  name: 'LoginPage',
  components: { LoginPageForm, RouterLinkComponent },

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
