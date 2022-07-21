<template>
  <div class="login-page">
    <router-link
      :to="routeMainPage"
    >
      Home
    </router-link>
    <input-component
      v-model="inputValue"
      :type="inputType"
      :value="inputValue"
    />
    <button-component :on-click="submitLoginForm">
      Login
    </button-component>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { ButtonComponent, InputComponent } from '@/components'

export default {
  name: 'LoginPage',
  components: { ButtonComponent, InputComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE },
    inputType: 'date',
    inputValue: ''
  }),

  methods: {
    submitLoginForm () {
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss">
  .login-page {
    padding: 10px;
  }
</style>
