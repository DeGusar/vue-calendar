<template>
  <div class="auth-layout">
    <HeaderComponentEmpty />
    <div class="auth-layout__content">
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import { FooterComponent, HeaderComponentEmpty } from '@/components/pageElements'

export default {
  name: 'AuthLayout',
  components: { HeaderComponentEmpty, FooterComponent }

}
</script>

<style lang="scss">
.auth-layout {
  &__content {
    padding: 0 10px;
    height: calc(100vh - ($header-height + $footer-height));
    overflow-y: auto;
  }
}
</style >
