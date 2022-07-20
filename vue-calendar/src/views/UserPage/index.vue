<template>
  <div class="user-page">
    <p>User Info</p>
    <router-link :to="routeMainPage">
      Home
    </router-link>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'

export default {
  name: 'UserPage',
  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">

</style>
