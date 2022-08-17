<template>
  <div class="main-page">
    <MainPageHeader :date-picker-value="'22 August'" />
  </div>
</template>

<script>
import MainPageHeader from './MainPageHeader.vue'

export default {
  name: 'MainPage',

  components: { MainPageHeader }
}

</script>

<style lang="scss">
</style>
