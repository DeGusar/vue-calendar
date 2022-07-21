<template>
  <div id="app">
    <header-component />
    <router-view class="main" />
    <footer-component />
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '@/components/index'

export default {
  components: { HeaderComponent, FooterComponent }
}
</script>

<style lang="scss">
html {
  font-size: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 2rem;
}

.main {
  padding: 0 10px;
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
