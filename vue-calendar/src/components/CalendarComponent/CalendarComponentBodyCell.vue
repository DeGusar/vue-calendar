<template>
  <div
    class="calendar-component-body-cell"
    :class="cellStyles"
  >
    {{ formattedCellDate }}
  </div>
</template>

<script>
import formatDates from '@/utils/helpers/formatDates'

export default {
  name: 'CalendarComponentBodyCell',

  props: {
    cellDate: {
      type: [String, Date],
      required: true
    },
    cellIndex: {
      type: Number,
      required: true
    },
    currentDay: {
      type: Date,
      required: true
    },
    pickedDay: {
      type: [String, Date],
      required: true
    }
  },

  computed: {
    formattedCellDate () {
      if (this.cellIndex === 0 || new Date(this.cellDate).getDate() === 1) {
        return formatDates.MMMDD(this.cellDate)
      }

      return formatDates.DD(this.cellDate)
    },

    cellStyles () {
      const additionalClasses = []
      const isToday = formatDates.areDatesEqual(this.cellDate, this.currentDay)
      const isBeforeToday = formatDates.isFirstDateBeforeSecondDate(this.cellDate, this.currentDay)

      if (isToday) {
        additionalClasses.push('today')
      } else if (isBeforeToday) {
        additionalClasses.push('past-days')
      }

      return additionalClasses.join(' ')
    }
  }

}
</script>

<style lang="scss">
  .calendar-component-body-cell {
    width: calc(100% / 7);
    height: calc((100% / 5));
    padding: 9px 12px;
    border-bottom: 1px solid $color-black-light;
  }

  .today {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: $color-blue;
    }
  }

  .past-days {
    background-color: #dddad6;
  }
</style>
