<template>
  <div class="registration-page">
    <p>Registration</p>
    <RouterLinkComponent :to="routeMainPage">
      Home
    </RouterLinkComponent>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { RouterLinkComponent } from '@/components'

export default {
  name: 'RegistrationPage',
  components: { RouterLinkComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang="scss">
</style>
