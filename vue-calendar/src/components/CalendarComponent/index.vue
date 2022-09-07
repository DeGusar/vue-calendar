<template>
  <div class="calendar-component">
    <CalendarComponentHeader />
    <CalendarComponentBody
      :picked-day="pickedDay"
      :current-day="currentDay"
      :dates-data="datesData"
      :on-click-unpicked-cell="onClickUnpickedCell"
      :on-click-picked-cell="onClickPickedCell"
      :on-click-event="onClickEvent"
      :rows-quantity-in-calendar="rowsQuantityInCalendar"
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
    rowsQuantityInCalendar: {
      type: Number,
      required: true
    },
    pickedDay: {
      type: Date,
      required: true
    },
    datesData: {
      type: Array,
      required: true,
      validator: function (propData) { return validateDatesData(propData) }
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

<style lang='scss'>
  .calendar-component {
    width: 100%;
    height: calc(100% - $main-page-header);
  }
</style>
