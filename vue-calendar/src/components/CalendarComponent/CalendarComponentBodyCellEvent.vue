<template>
  <transition name="event">
    <button
      class="calendar-component-body-cell-event"
      :title="titleText"
      @click.stop="onClickEvent"
    >
      <div class="calendar-component-body-cell-event__time">
        {{ formattedStartDate }}
      </div>
      <div class="calendar-component-body-cell-event__event-title">
        {{ eventTitle }}
      </div>
    </button>
  </transition>
</template>

<script>
import formatDates from '@/utils/helpers/formatDates'

export default {
  name: 'CalendarComponentBodyCellEvent',

  props: {
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
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
      return formatDates.to12HoursFormat(this.startDate)
    },
    formattedEndDate () {
      return formatDates.to12HoursFormat(this.endDate)
    },
    titleText () {
      return `${this.eventTitle}\nfrom ${this.formattedStartDate} to ${this.formattedEndDate} `
    }
  }
}
</script>

<style lang="scss">
.calendar-component-body-cell-event {
  font-size: $font-size-small;
  font-weight: normal;
  display: flex;
  width: 100%;
  height: 20px;
  border-radius: 3px;
  color: $color-blue-dark;
  background-color: $color-blue-lighter;
  align-items: center;
  padding-left: 5px;
  column-gap: 5px;

  &__time {
    flex-shrink: 0;
  }

  &__event-title {
    font-weight: bold;

    @include long-text-to-dots;
  }

  &:active {
    color: $color-white;
    background-color: $color-blue-dark;
  }

  &:hover {
    color: $color-white;
    background-color: $color-blue-dark;
  }
}

// TODO need to discuss it

/* .event-enter-active,
.event-leave-active {
  transition: opacity 0.5s;
}

.event-enter-to,
.event-leave-to {
  opacity: 0;
} */
</style>
