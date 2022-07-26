<template>
  <div class="header">
    <div class="header__wrapper">
      <router-link
        class="header__title"
        :to="routeMainPage"
      >
        Vue calendar
      </router-link>
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
  .header {
    background-color: $color-purple;
    height: $header-height;
    color: white;

    &__title {
      color: white;
      text-decoration: none;
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
