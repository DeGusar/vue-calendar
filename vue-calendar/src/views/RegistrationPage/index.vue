<template>
  <div class="registration-page">
    <RouterLinkComponent
      :to="routeMainPage"
    >
      Home
    </RouterLinkComponent>
    <RegistrationPageForm />
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { RouterLinkComponent } from '@/components/basicComponents'
import RegistrationPageForm from './RegistrationPageForm'

export default {
  name: 'RegistrationPage',
  components: { RouterLinkComponent, RegistrationPageForm },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">
</style>
