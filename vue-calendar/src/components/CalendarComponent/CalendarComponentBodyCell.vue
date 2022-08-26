<template>
  <div class="calendar-component-body-cell__wrapper">
    <button
      class="calendar-component-body-cell"
      :class="cellStyles"
      @click="onClickCell"
    >
      <div class="calendar-component-body-cell__day">
        {{ formattedCellDate }}
      </div>
    </button>
    <div class="calendar-component-body-cell__events">
      <CalendarComponentBodyCellEvent
        v-for="event in eventsData"
        :key="event.id"
        :event-data="event"
        v-bind="event"
        :on-click-event="onClickEvent"
      />
    </div>
  </div>
</template>

<script>
import formatDates from '@/utils/helpers/formatDates'
import CalendarComponentBodyCellEvent from './CalendarComponentBodyCellEvent.vue'

export default {
  name: 'CalendarComponentBodyCell',
  components: { CalendarComponentBodyCellEvent },

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
    },
    eventsData: {
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
  },

  computed: {
    formattedCellDate () {
      const isFirstDayOfTheMonth = new Date(this.cellDate).getDate() === 1
      const isFirstCell = this.cellIndex === 0
      const isToday = formatDates.areDatesEqual(this.cellDate, this.currentDay)

      if (isFirstCell || isFirstDayOfTheMonth || isToday) {
        return formatDates.MMMDD(this.cellDate)
      }

      return formatDates.DD(this.cellDate)
    },

    cellStyles () {
      const isToday = formatDates.areDatesEqual(this.cellDate, this.currentDay)
      const isBeforeToday = formatDates.isFirstDateBeforeSecondDate(this.cellDate, this.currentDay)
      const isPickedDay = formatDates.areDatesEqual(this.cellDate, this.pickedDay)

      return {
        today: isToday,
        'past-day': isBeforeToday && !isToday,
        'picked-day': isPickedDay
      }
    }
  }

}
</script>

<style lang="scss">
  .calendar-component-body-cell {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    text-align: left;
    align-items: start;
    padding: 9px 5px;

    &:active {
      background-color: #918f8d;
    }

    &__wrapper {
      width: calc(100% / 7);
      height: calc((100% / 5));
      border-bottom: 1px solid $color-black-light;
      overflow: hidden;
      position: relative;
    }

    &__day {
      width: 100%;
    }

    &__events {
      position: absolute;
      top: 25px;
      left: 5px;
      margin-top: 5px;
      width: calc(100% - 10px);
      display: flex;
      flex-direction: column;
      justify-content: start;
      overflow: hidden;
      row-gap: 2px;
    }
  }

  .today {
    position: relative;
    color: $color-blue;
    font-weight: 700;

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

  .past-day {
    background-color: #dddad6;
  }

  .picked-day {
    background-color: #9fc5e4;
  }
</style>
