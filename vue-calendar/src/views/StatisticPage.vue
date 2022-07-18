<template>
  <div>
    <p>Statistic</p>
    <router-link :to="{name: urlNames.MAIN_PAGE}">Home</router-link>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants/urlNames'
export default {
  data: () => ({
    urlNames
  })
}
</script>

<style>

</style>
