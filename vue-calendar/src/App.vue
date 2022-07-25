<template>
  <div id="app">
    <HeaderComponent />
    <router-view class="main" />
    <FooterComponent />
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '@/components'

export default {
  components: { HeaderComponent, FooterComponent }
}
</script>

<style lang="scss" >
@import "./assets/styles/reset";

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
