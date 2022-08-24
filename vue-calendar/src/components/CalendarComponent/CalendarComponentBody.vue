<template>
  <div class="calendar-component-body">
    <CalendarComponentBodyCell
      v-for="(date, index) in datesData"
      :key="index"
      :cell-date="date"
      :cell-index="index"
      :current-day="currentDay"
      :picked-day="pickedDay"
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
