<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

export default {
  computed: {
    layout () {
      const layoutName = this.$route.meta.layout || 'MainLayout'

      return () => import(`@/layouts/${layoutName}.vue`)
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
