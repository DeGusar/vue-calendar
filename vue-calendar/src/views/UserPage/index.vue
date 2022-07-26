<template>
  <div class="user-page">
    <p>User Info</p>
    <RouterLinkComponent :to="routeMainPage">
      Home
    </RouterLinkComponent>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'UserPage',
  components: { RouterLinkComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">

</style>
