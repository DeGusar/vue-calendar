<template>
  <div class="registration-page">
    <RegistrationPageForm @registration="onRegistration" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { urlNames } from '@/utils/constants'
import RegistrationPageForm from './RegistrationPageForm'

export default {
  name: 'RegistrationPage',
  components: { RegistrationPageForm },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  }),

  computed: {
    ...mapGetters(['userId'])
  },
  methods: {
    ...mapActions(['registrate']),
    async onRegistration (registrationData) {
      const { result, firstName, lastName, message } = await this.registrate({ registrationData })

      if (result) {
        this.$router.push(this.routeMainPage)
        this.$notify({
          group: 'auth',
          type: 'success',
          title: `Hello, ${firstName} ${lastName}`,
          text: 'Account successfully created'
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
</style>
