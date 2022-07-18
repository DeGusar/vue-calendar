<template>
  <div>
    <p>Main page</p>
    <router-link :to="{name: urlNames.LOGIN_PAGE}">Login</router-link>
    <router-link :to="{name: urlNames.REGISTRATION_PAGE}">Registration</router-link>
    <router-link :to="{name: urlNames.STATISTIC_PAGE}">Statistic</router-link>
    <router-link :to="{name: urlNames.USER_PAGE}">User</router-link>
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
