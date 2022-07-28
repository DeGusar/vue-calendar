<template>
  <div class="registration-page">
    <RegistrationPageForm />
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import RegistrationPageForm from './RegistrationPageForm'

export default {
  name: 'RegistrationPage',
  components: { RegistrationPageForm },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">
</style>
