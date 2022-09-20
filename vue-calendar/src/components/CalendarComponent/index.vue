<template>
  <div class="calendar-component">
    <CalendarComponentHeader />
    <CalendarComponentBody
      :picked-day="pickedDay"
      :dates-data="datesData"
      :rows-quantity-in-calendar="rowsQuantity"
      :current-day="currentDay"
      :on-click-unpicked-cell="onClickUnpickedCell"
      :on-click-picked-cell="onClickPickedCell"
      :on-click-event="onClickEvent"
    />
  </div>
</template>

<script>
import CalendarComponentHeader from './CalendarComponentHeader'
import CalendarComponentBody from './CalendarComponentBody'

function validateDatesData (propData) {
  const daysQuantity = 35
  const daysQuantityInExtendedCalendar = 42

  return (propData.length === daysQuantity || propData.length === daysQuantityInExtendedCalendar) && propData.every(object => {
    return (
      (Object.prototype.hasOwnProperty.call(object, 'date') && object.date instanceof Date) &&
      object.eventsData.every(e => {
        return (
          (e instanceof Object) &&
          (Object.prototype.hasOwnProperty.call(e, 'startDate') && e.startDate instanceof Date) &&
          (Object.prototype.hasOwnProperty.call(e, 'endDate') && e.endDate instanceof Date) &&
          (Object.prototype.hasOwnProperty.call(e, 'eventTitle') && typeof e.eventTitle === 'string'))
      }))
  })
}

export default {
  name: 'CalendarComponent',
  components: { CalendarComponentHeader, CalendarComponentBody },

  props: {
    currentDay: {
      type: Date,
      required: true
    },
    pickedDay: {
      type: Date,
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
  },

  computed: {
    rowsQuantity () {
      const oneWeekInDays = 7

      return this.datesData.length / oneWeekInDays
    }
  }
}
</script>

<style lang='scss'>
  .calendar-component {
    width: 100%;
    height: calc(100% - $main-page-header);
  }
</style>
