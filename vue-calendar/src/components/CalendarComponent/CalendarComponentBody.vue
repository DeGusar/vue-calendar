<template>
  <div class="calendar-component-body">
    <CalendarComponentBodyCell
      v-for="({date, eventsData}, index) in datesData"
      :key="index"
      :cell-date="date"
      :cell-index="index"
      :current-day="currentDay"
      :picked-day="pickedDay"
      :on-click-cell="onClickCell"
      :on-click-picked-cell="onClickPickedCell"
      :on-click-event="onClickEvent"
      :events-data="eventsData"
    />
  </div>
</template>

<script>
import CalendarComponentBodyCell from './CalendarComponentBodyCell.vue'

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
      required: true
    },
    onClickCell: {
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
    height: calc(100% - 48px);
    font-size: $font-size-small;
    display: flex;
    flex-wrap: wrap;
    row-gap: 0;
    align-items: start;
    column-gap: 0;
  }
</style>
