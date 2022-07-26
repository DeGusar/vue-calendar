<template>
  <div class="error404-page">
    <router-link
      :to="routeMainPage"
    >
      Home
    </router-link>
    <h2>Error404</h2>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'

export default {
  name: 'Error404Page',

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang='scss'>
  .error404-page {
    background-color: $color-white;
    color: $color-black;
    height: 100vh;
  }
</style>
