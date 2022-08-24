<template>
  <div class="main-page">
    <CalendarComponent
      :dates-data="datesData"
      :picked-day="new Date('2022-07-24')"
    />
  </div>
</template>

<script>
import CalendarComponent from '@/components/CalendarComponent'
const getData = () => {
  const D = new Date('2022-07-29')
  const Till = new Date('2022-09-02')
  const result = []

  function pad (s) { return ('00' + s).slice(-2) }

  while (D.getTime() < Till.getTime()) {
    result.push('' + D.getFullYear() + '-' + pad(D.getMonth() + 1) + '-' + pad(D.getDate()))
    D.setDate(D.getDate() + 1)
  }

  return result
}

export default {
  name: 'MainPage',
  components: { CalendarComponent },

  data: () => ({
    datesData: getData()
  })
}

</script>

<style lang="scss">
.main-page {
  height: 100%;
}
</style>
