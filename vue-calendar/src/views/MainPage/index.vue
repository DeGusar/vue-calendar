<template>
  <div class="main-page">
    <MainPageSidebar />
    <div class="main-page__content">
      <MainPageHeader :date-picker-value="'22 August'" />
    </div>
  </div>
</template>

<script>
import MainPageHeader from './MainPageHeader.vue'
import MainPageSidebar from './MainPageSidebar.vue'

export default {
  name: 'MainPage',

  components: { MainPageHeader, MainPageSidebar }
}

</script>

<style lang="scss">
.main-page {
  display: flex;
  height: 100%;

  &__content {
    flex-grow: 1;
  }
}
</style>
