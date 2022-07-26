<template>
  <div class="statistic-page">
    <p>Statistic</p>
    <RouterLinkComponent :to="routeMainPage">
      Home
    </RouterLinkComponent>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'StatisticPage',
  components: { RouterLinkComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">

</style>
