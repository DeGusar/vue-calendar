<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="login-page">
    <router-link :to="routeMainPage">
      Home
    </router-link>
    <button-component :onClick="writeToConsole">
      Submit
    </button-component>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { ButtonComponent } from '@/components'

export default {
  name: 'LoginPage',
  components: { ButtonComponent },
  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  }),
  methods: {
    writeToConsole () {
      console.log('click')
    }

  }
}
</script>

<style lang="scss">
  .login-page {
    padding: 10px;
  }
</style>
