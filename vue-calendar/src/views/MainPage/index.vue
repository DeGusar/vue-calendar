<template>
  <div class="main-page">
    <CalendarComponent
      :dates-data="datesData"
      :picked-day="new Date('2022-08-18')"
      :on-click-event="onClickEvent"
      :on-click-cell="onClickCell"
      :on-click-picked-cell="onClickPickedCell"
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
    result.push({ date: '' + D.getFullYear() + '-' + pad(D.getMonth() + 1) + '-' + pad(D.getDate()), eventsData: [{ startDate: new Date(), endDate: new Date(), eventTitle: 'Test' }, { startDate: new Date(), endDate: new Date(), eventTitle: 'Test' }] })
    D.setDate(D.getDate() + 1)
  }

  return result
}

export default {
  name: 'MainPage',
  components: { CalendarComponent },

  data: () => ({
    datesData: getData()
  }),

  methods: {
    onClickCell () {
      console.log('cell')
    },
    onClickPickedCell () {
      console.log('picked-cell')
    },
    onClickEvent () {
      console.log('event')
    }
  }
}

</script>

<style lang="scss">
.main-page {
  height: 100%;
}
</style>
