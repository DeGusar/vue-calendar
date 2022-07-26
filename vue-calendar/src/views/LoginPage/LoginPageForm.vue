<template>
  <form class="login-page-form">
    <InputComponent
      v-model="inputValue"
      type="date"
      :value="inputValue"
    />
    <ButtonComponent
      type="submit"
      @click.prevent="submitLoginForm"
    >
      Login
    </ButtonComponent>
  </form>
</template>

<script>
import { ButtonComponent, InputComponent } from '@/components'

export default {
  name: 'LoginPageForm',
  components: { ButtonComponent, InputComponent },

  data: () => ({
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
  .login-page-form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
