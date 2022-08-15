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
import { HeaderComponent, FooterComponent } from '@/components/pageElements'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MainLayout',
  components: { HeaderComponent, FooterComponent },

  computed: {
    ...mapGetters('authentication', ['userId'])
  },

  watch: {
    userId (newUserId) {
      this.updateUserData(newUserId)
    }
  },

  created () {
    this.updateUserData(this.userId)
  },

  methods: {
    ...mapActions('userSettings', ['updateUserData'])
  }

}
</script>

<style lang="scss">
.main-layout {
  &__content {
    padding: 0 10px;
    height: calc(100vh - ($header-height + $footer-height));
    overflow-y: auto;
    background-color: $color-white-dark;
  }
}
</style >
