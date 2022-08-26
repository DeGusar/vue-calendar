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
        <UserSettingsComponent />
      </nav>
    </div>
  </div>
</template>

<script>
import { RouterLinkComponent } from '../basicComponents'
import UserSettingsComponent from './UserSettingsComponent'
import { urlNames } from '@/utils/constants'

export default {
  name: 'HeaderComponent',
  components: { RouterLinkComponent, UserSettingsComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
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
    align-items: center;
    column-gap: 15px;
    position: relative;
  }
}
</style>
