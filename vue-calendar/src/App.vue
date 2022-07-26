<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { layoutNames } from '@/utils/constants'

export default {
  computed: {
    layout () {
      const layoutName = this.$route.meta.layout || layoutNames.MAIN_LAYOUT

      return () => import(`@/layouts/${layoutName}`)
    }
  }
}
</script>

<style lang="scss" >
@import "./assets/styles/reset";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: $font-size-large;
}
</style>
