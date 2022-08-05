<template>
  <div class="header-component-empty">
    <div class="header-component-empty__wrapper">
      <p
        class="header-component-empty__wrapper-title"
      >
        Vue calendar
      </p>
    </div>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'

export default {
  name: 'HeaderComponentEmpty',

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">
  .header-component-empty {
    background-color: $color-purple;
    height: $header-height;

    &__wrapper {
      max-width: $content-width;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
    }

    &__wrapper-title {
      font-size: $font-size-large;
      color: $color-white;
      pointer-events: none;
    }
  }
</style>
