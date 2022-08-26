<template>
  <button
    class="calendar-component-body-cell-event"
    @click.stop="onClickEvent"
  >
    <div class="calendar-component-body-cell-event__time">
      {{ formattedStartDate }}
    </div>
    <div class="calendar-component-body-cell-event__event-title">
      {{ eventTitle }}
    </div>
  </button>
</template>

<script>
import formatDates from '@/utils/helpers/formatDates'

export default {
  name: 'CalendarComponentBodyCellEvent',

  props: {
    startDate: {
      type: [String, Date],
      required: true
    },
    endDate: {
      type: [String, Date],
      required: true
    },
    eventTitle: {
      type: String,
      required: true
    },
    onClickEvent: {
      type: Function,
      required: true
    }

  },

  computed: {
    formattedStartDate () {
      return formatDates.hh(this.startDate)
    }
  }

}
</script>

<style lang="scss">
  .calendar-component-body-cell-event {
    font-size: 14px;
    font-weight: normal;
    display: flex;
    width: 100%;
    height: 22px;
    border-radius: 4px;
    color: rgb(40 100 145);
    background-color: rgb(186 218 243);
    align-items: center;
    padding-left: 3px;
    column-gap: 5px;
    z-index: 5;

    &__event-title {
      font-weight: 600;
    }

    &:active {
      color: white;
      background-color: rgb(40 100 145);
    }
  }
</style>
