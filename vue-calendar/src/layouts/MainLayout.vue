<template>
  <div class="main-layout">
    <HeaderComponent />
    <div class="main-layout__content">
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '@/components'

export default {
  name: 'MainLayout',
  components: { HeaderComponent, FooterComponent }

}
</script>

<style lang="scss">
.main-layout {
  &__content {
    padding: 0 10px;
    height: calc(100vh - ($header-height + $footer-height));
    overflow-y: auto;
  }
}
</style >
