<template>
  <div class="header-component">
    <div class="header-component__wrapper">
      <RouterLinkComponent
        class="header-component__title"
        :to="routeMainPage"
      >
        Vue calendar
      </RouterLinkComponent>
      <nav class="header-component__nav">
        <RouterLinkComponent
          v-for="{routeName, text} in navRoutes"
          :key="text"
          :to="routeName"
        >
          {{ text }}
        </RouterLinkComponent>
        <button
          class="header-component__nav-button"
          @click="logoutHandler"
        >
          Logout
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import { RouterLinkComponent } from '../basicComponents'
import { urlNames } from '@/utils/constants'

export default {
  name: 'HeaderComponent',
  components: { RouterLinkComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE },
    navRoutes: [
      {
        routeName: { name: urlNames.STATISTIC_PAGE },
        text: 'Statistic'
      },
      {
        routeName: { name: urlNames.USER_PAGE },
        text: 'Profile'
      }
    ]
  }),
  methods: {
    logoutHandler () {
      localStorage.removeItem('userId')

      this.$notify({
        group: 'auth',
        type: 'success',
        text: 'Successfully logout'
      })
      this.$router.push({ name: urlNames.LOGIN_PAGE })
    }
  }
}
</script>

<style lang="scss">
  .header-component {
    background-color: $color-purple;
    height: $header-height;

    &__title {
      font-size: $font-size-large;
    }

    &__wrapper {
      max-width: $content-width;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
    }

    &__nav {
      display: flex;
      align-items: center;
      column-gap: 15px;
    }

    &__nav-button {
      color: $color-white;
      cursor: pointer;
      font-size: $font-size-base;
      background-color: inherit;

      &:hover {
        color: $color-black;
      }
    }
  }
</style>
