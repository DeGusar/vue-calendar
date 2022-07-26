<template>
  <div class="header-component-empty">
    <div class="header-component-empty__wrapper">
      <RouterLinkComponent
        class="header-component-empty__title"
        :to="routeMainPage"
      >
        Vue calendar
      </RouterLinkComponent>
    </div>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'HeaderComponentEmpty',
  components: { RouterLinkComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">
  .header-component-empty {
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
