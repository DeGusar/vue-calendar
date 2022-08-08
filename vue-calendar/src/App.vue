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
import { mapGetters } from 'vuex'
import localStorageKeys from '@/utils/constants/localStorageKeys'
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
    ...mapGetters(['userId']),
    layout () {
      const layoutName = this.$route.meta.layout || layoutNames.MAIN_LAYOUT

      return this.layouts[layoutName]
    }
  },
  watch: {
    userId (newUserId) {
      if (newUserId) {
        localStorage.setItem(localStorageKeys.USER_ID, newUserId)
      }
    }
  }
}
</script>

<style lang="scss" >
@import "./assets/styles/reset";
@import "./assets/styles/spinner";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: $font-size-large;
}
</style>
