<template>
  <div class="login-page">
    <LoginPageForm @login="onLogin" />
  </div>
</template>

<script>
import { login } from '@/api/authApi'
import { urlNames } from '@/utils/constants'
import LoginPageForm from './LoginPageForm'

export default {
  name: 'LoginPage',
  components: { LoginPageForm },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  }),

  methods: {
    async onLogin ({ email, password }) {
      try {
        await login({ email, password })
        this.$router.push(this.routeMainPage)
        this.$notify({
          group: 'auth',
          type: 'success',
          text: 'Successfully authorized'
        })
      } catch (e) {
        this.$notify({
          group: 'auth',
          type: 'error',
          title: 'Error',
          text: `${e.message}`
        })
      }
    }
  }
}
</script>

<style lang="scss">
  .login-page {
    padding: 10px;
  }
</style>
