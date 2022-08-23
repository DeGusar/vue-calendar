<template>
  <div class="calendar-component">
    <CalendarComponentHeader />
    <CalendarComponentBody
      :picked-day="pickedDay"
      :current-day="currentDay"
      :dates-data="datesData"
    />
  </div>
</template>

<script>
import CalendarComponentHeader from './CalendarComponentHeader'
import CalendarComponentBody from './CalendarComponentBody'

export default {
  name: 'CalendarComponent',
  components: { CalendarComponentHeader, CalendarComponentBody },

  props: {
    currentDay: {
      type: Date,
      default: () => new Date()
    },
    pickedDay: {
      type: [String, Date],
      required: true
    },
    datesData: {
      type: Array,
      required: true
    }
  }

}
</script>

<style lang='scss'>
  .calendar-component {
    width: 100%;
    height: 100%;
  }
</style>
