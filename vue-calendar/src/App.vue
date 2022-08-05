<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <notifications
      position="bottom right"
      group="auth"
    />
  </div>
</template>

<script>
import { layoutNames } from '@/utils/constants'
import { AuthLayout, ErrorLayout, MainLayout } from '@/layouts'

export default {
  data: () => ({
    layouts: {
      AuthLayout,
      ErrorLayout,
      MainLayout
    }
  }),
  computed: {
    layout () {
      const layoutName = this.$route.meta.layout || layoutNames.MAIN_LAYOUT

      return this.layouts[layoutName]
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
