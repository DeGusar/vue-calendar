<!-- eslint-disable no-prototype-builtins -->
<template>
  <div class="calendar-component-body">
    <CalendarComponentBodyCell
      v-for="({date, eventsData}, index) in datesData"
      :key="new Date(date).getTime()"
      :cell-date="date"
      :is-first-cell="index === 0"
      :current-day="currentDay"
      :picked-day="pickedDay"
      :on-click-unpicked-cell="onClickUnpickedCell"
      :on-click-picked-cell="onClickPickedCell"
      :on-click-event="onClickEvent"
      :events-data="eventsData"
    />
  </div>
</template>

<script>
import CalendarComponentBodyCell from './CalendarComponentBodyCell.vue'

const validateDatesData = (propData) => {
  return propData.every(object => {
    return Object.prototype.hasOwnProperty.call(object, 'date') && object.eventsData.every(e => {
      const set = new Set()
      set.add(Boolean(Object.prototype.hasOwnProperty.call(e, 'startDate') && e.startDate instanceof Date))
      set.add(Boolean(Object.prototype.hasOwnProperty.call(e, 'endDate') && e.endDate instanceof Date))
      set.add(Boolean(Object.prototype.hasOwnProperty.call(e, 'eventTitle') && typeof e.eventTitle === 'string'))

      return !set.has(false)
    })
  })
}

export default {
  name: 'CalendarComponentBody',
  components: { CalendarComponentBodyCell },

  props: {
    currentDay: {
      type: Date,
      required: true
    },
    pickedDay: {
      type: [String, Date],
      required: true
    },
    datesData: {
      type: Array,
      required: true,
      validator: (propData) => validateDatesData(propData)
    },
    onClickUnpickedCell: {
      type: Function,
      required: true
    },
    onClickPickedCell: {
      type: Function,
      required: true
    },
    onClickEvent: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .calendar-component-body {
    width: 100%;
    height: calc(100% - $calendar-header-height);
    font-size: $font-size-small;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
</style>
