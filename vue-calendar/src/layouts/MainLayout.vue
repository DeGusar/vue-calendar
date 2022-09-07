<template>
  <div
    class="main-layout"
  >
    <HeaderComponent />
    <div
      class="main-layout__content-wrapper"
      :class="{'spinner': isLoading}"
    >
      <div
        v-if="isDataLoaded"
        class="main-layout__content"
      >
        <slot />
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '@/components/pageElements'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainLayout',
  components: { HeaderComponent, FooterComponent },

  data: () => ({
    isDataLoaded: false
  }),

  computed: {
    ...mapGetters('userSettings', ['isLoading'])
  },

  async created () {
    await this.getUserData()
    this.isDataLoaded = true
  },

  methods: {
    ...mapActions('userSettings', ['getUserData'])
  }

}
</script>

<style lang="scss">
.main-layout {
  height: calc(100vh - ($header-height + $footer-height));

  &__content {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background-color: $color-white-dark;
  }

  &__content-wrapper {
    height: 100%;
    width: 100%;
  }
}
</style >
