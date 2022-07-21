<template>
  <form class="login-page-form">
    <InputComponent
      v-model="inputValue"
      :type="inputType"
      :value="inputValue"
    />
    <ButtonComponent
      :type="buttonType"
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
    inputType: 'date',
    inputValue: '',
    buttonType: 'submit'
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
