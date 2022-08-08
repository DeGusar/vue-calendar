<template>
  <div
    class="login-page"
    :class="spinnerClass"
  >
    <LoginPageForm @login="onLogin" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { urlNames } from '@/utils/constants'
import LoginPageForm from './LoginPageForm'

export default {
  name: 'LoginPage',
  components: { LoginPageForm },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  }),
  computed: {
    ...mapGetters(['userId', 'isLoadingLogin']),
    spinnerClass () {
      return this.isLoadingLogin ? 'spinner' : ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async onLogin (credentials) {
      const { result, message } = await this.login({ credentials })

      if (result) {
        this.$router.push(this.routeMainPage)
        this.$notify({
          group: 'auth',
          type: 'success',
          text: 'Successfully authorized'
        })
      } else {
        this.$notify({
          group: 'auth',
          type: 'error',
          title: 'Error',
          text: `${message}`
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
