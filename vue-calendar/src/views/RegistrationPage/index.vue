<template>
  <div class="registration-page">
    <RegistrationPageForm @registration="onRegistration" />
  </div>
</template>

<script>
import { registrateUser } from '@/api/authApi'
import { urlNames } from '@/utils/constants'
import RegistrationPageForm from './RegistrationPageForm'

export default {
  name: 'RegistrationPage',
  components: { RegistrationPageForm },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  }),

  methods: {
    async onRegistration ({ firstName, lastName, email, password }) {
      try {
        const { userId } = await registrateUser({ firstName, lastName, email, password })
        console.log(userId)
        localStorage.setItem('userId', userId)
        this.$router.push(this.routeMainPage)
        this.$notify({
          group: 'auth',
          type: 'success',
          title: `Hello, ${firstName} ${lastName}`,
          text: 'Account successfully created'
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
</style>
