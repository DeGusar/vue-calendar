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
      </nav>
    </div>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'HeaderComponent',
  components: { RouterLinkComponent },

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
      column-gap: 15px;
    }
  }
</style>
