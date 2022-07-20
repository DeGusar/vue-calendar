<template>
  <div class="main-page">
    <router-link :to="routeLoginPage">
      Login
    </router-link>
    <router-link :to="routeRegistrationPage">
      Registration
    </router-link>
    <router-link :to="routeStatisticPage">
      Statistic
    </router-link>
    <router-link :to="routeUserPage">
      User
    </router-link>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'

export default {
  name: 'MainPage',
  data: () => ({
    routeLoginPage: { name: urlNames.LOGIN_PAGE },
    routeRegistrationPage: { name: urlNames.REGISTRATION_PAGE },
    routeStatisticPage: { name: urlNames.STATISTIC_PAGE },
    routeUserPage: { name: urlNames.USER_PAGE }
  })
}
</script>

<style lang="scss">
</style>
