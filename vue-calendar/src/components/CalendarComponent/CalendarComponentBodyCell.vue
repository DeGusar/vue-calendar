<template>
  <div
    ref="calendarCell"
    class="calendar-component-body-cell__wrapper"
  >
    <button
      class="calendar-component-body-cell"
      :class="cellClasses"
      @click="onClickCell"
    >
      <div class="calendar-component-body-cell__day">
        {{ formattedCellDate }}
      </div>
    </button>
    <div
      class="calendar-component-body-cell__events"
      :style="{maxHeight: eventsDivMaxHeight + 'px'}"
    >
      <CalendarComponentBodyCellEvent
        v-for="event in eventsData"
        :key="event.id"
        :event-data="event"
        v-bind="event"
        :on-click-event="onClickEvent"
      />
    </div>
    <div
      v-if="isShowDots"
      class="calendar-component-body-cell__dots"
      :style="{top: eventsDivMaxHeight + 30 + 'px'}"
    >
      <button class="calendar-component-body-cell__dots-button" />
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

  data: () => ({
    cellHeight: 0
  }),

  computed: {
    formattedCellDate () {
      const isFirstDayOfTheMonth = new Date(this.cellDate).getDate() === 1
      const isFirstCell = this.cellIndex === 0
      const isToday = formatDates.areDatesEqual(this.cellDate, this.currentDay)

      if (isFirstCell || isFirstDayOfTheMonth || isToday) {
        return formatDates.toShortMonthNumericDay(this.cellDate)
      }

      return formatDates.toNumericDay(this.cellDate)
    },

    isPickedDay () {
      return formatDates.areDatesEqual(this.cellDate, this.pickedDay)
    },

    cellClasses () {
      const rootClass = 'calendar-component-body-cell'
      const isToday = formatDates.areDatesEqual(this.cellDate, this.currentDay)
      const isBeforeToday = formatDates.isFirstDateBeforeSecondDate(this.cellDate, this.currentDay)

      return {
        [`${rootClass}--today`]: isToday,
        [`${rootClass}--past-day`]: isBeforeToday && !isToday,
        [`${rootClass}--picked-day`]: this.isPickedDay
      }
    },

    quantityOfPossibleEvents () {
      const paddingsHeight = 20
      const titleHeight = 20
      const oneEventHeight = 20
      const possibleEventsHeight = this.cellHeight - paddingsHeight - titleHeight - oneEventHeight

      return Math.floor(possibleEventsHeight / 20)
    },

    eventsDivMaxHeight () {
      const oneEventHeight = 20

      return this.quantityOfPossibleEvents * oneEventHeight
    },

    isShowDots () {
      return this.eventsData.length > this.quantityOfPossibleEvents
    }
  },

  mounted () {
    this.calcCellHeight()
  },

  methods: {
    onClickCell () {
      this.isPickedDay ? this.onClickPickedCell() : this.onClickUnpickedCell(this.cellDate)
    },
    calcCellHeight () {
      this.cellHeight = this.$refs.calendarCell.clientHeight
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
  align-items: flex-start;
  padding: 10px 5px;
  background-color: $color-white;
  overflow: hidden;
  position: relative;

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
    justify-content: flex-start;
    overflow: hidden;
    row-gap: 3px;
  }

  &__dots {
    position: absolute;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__dots-button {
    width: 30px;
    height: 20px;
    background: no-repeat center/100% $calendar-dots-image-url;

    &:hover {
      border-radius: 3px;
      background-color: $color-blue-lighter;
    }
  }

  &--today {
    position: relative;
    color: $color-blue;
    font-weight: bold;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: $color-blue;
    }
  }

  &--past-day {
    background-color: $color-grey;
  }

  &--picked-day {
    background-color: $color-blue-light;
  }
}

</style>
