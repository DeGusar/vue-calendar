<template>
  <div class="header">
    <div class="wrapper">
      <router-link
        class="title"
        :to="routeMainPage"
      >
        Vue calendar
      </router-link>
      <nav class="nav">
        <router-link
          v-for="{routeName, text} in navRoutes"
          :key="text"
          :to="routeName"
          class="nav-link"
        >
          {{ text }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'

export default {
  name: 'HeaderComponent',
  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE },
    navRoutes: [
      {
        routeName: { name: urlNames.LOGIN_PAGE },
        text: 'Login'
      },
      {
        routeName: { name: urlNames.REGISTRATION_PAGE },
        text: 'Registration'
      },
      {
        routeName: { name: urlNames.STATISTIC_PAGE },
        text: 'Statistic'
      },
      {
        routeName: { name: urlNames.USER_PAGE },
        text: 'Profile'
      }
    ]
  })
}
</script>

<style lang="scss">
  .header {
    background-color: rgb(68 71 145);
    padding: 10px 0;
    color: white;

    & .title {
      color: white;
      text-decoration: none;
    }

    & .wrapper {
      max-width: 1600px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
    }

    & .nav {
      display: flex;
      column-gap: 15px;

      & .nav-link {
        color: white;
        text-decoration: none;
        font-size: 1.8rem;
      }
    }
  }
</style>
