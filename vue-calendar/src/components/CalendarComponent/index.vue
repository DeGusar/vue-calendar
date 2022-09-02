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
    />
  </div>
</template>

<script>
import CalendarComponentHeader from './CalendarComponentHeader'
import CalendarComponentBody from './CalendarComponentBody'

const validateDatesData = (propData) => {
  return propData.length === 35 && propData.every(object => {
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
  }

}
</script>

<style lang='scss'>
  .calendar-component {
    width: 100%;
    height: calc(100% - $main-page-header);
  }
</style>
