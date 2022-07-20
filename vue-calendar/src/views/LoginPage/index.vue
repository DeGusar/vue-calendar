<template>
  <div class="login-page">
    <p>Login</p>
    <router-link :to="routeMainPage">
      Home
    </router-link>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'

export default {
  name: 'LoginPage',
  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">

</style>
