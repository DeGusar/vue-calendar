<template>
  <div class="registration-page">
    <p>Registration</p>
    <router-link :to="routeMainPage">Home</router-link>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'

export default {
  name: 'RegistrationPage',
  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">
</style>
