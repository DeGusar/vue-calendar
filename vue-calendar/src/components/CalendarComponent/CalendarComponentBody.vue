<template>
  <div class="calendar-component-body">
    <CalendarComponentBodyCell
      v-for="({date, eventsData}, index) in datesData"
      :key="date.getTime()"
      :cell-date="date"
      :is-first-cell="index === 0"
      :current-day="currentDay"
      :picked-day="pickedDay"
      :on-click-unpicked-cell="onClickUnpickedCell"
      :on-click-picked-cell="onClickPickedCell"
      :on-click-event="onClickEvent"
      :events-data="eventsData"
      :events-max-quantity="eventsMaxQuantity"
      :rows-quantity-in-calendar="rowsQuantityInCalendar"
      @max-events-change="onEventsMaxQuantityChange"
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
      type: Date,
      required: true
    },
    datesData: {
      type: Array,
      required: true
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
    },
    rowsQuantityInCalendar: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    eventsMaxQuantity: 0
  }),

  methods: {
    onEventsMaxQuantityChange (quantity) {
      this.eventsMaxQuantity = quantity
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
