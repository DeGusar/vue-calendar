<template>
  <div class="header">
    <div class="header__wrapper">
      <RouterLinkComponent
        class="header__title"
        :to="routeMainPage"
      >
        Vue calendar
      </RouterLinkComponent>
    </div>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import RouterLinkComponent from './basicComponents/RouterLinkComponent'

export default {
  name: 'HeaderComponentEmpty',
  components: { RouterLinkComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">
  .header {
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
  }
</style>
