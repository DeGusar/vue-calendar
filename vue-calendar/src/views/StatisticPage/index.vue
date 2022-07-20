<template>
  <div class="statistic-page">
    <p>Statistic</p>
    <router-link :to="routeMainPage">
      Home
    </router-link>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'

export default {
  name: 'StatisticPage',
  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">

</style>
