<template>
  <transition
    appear
    name="event"
  >
    <ButtonComponent
      :title="titleText"
      class="calendar-component-body-cell-event"
      @click.stop="onClickTitle"
    >
      <div class="calendar-component-body-cell-event__time">
        {{ formattedStartDate }}
      </div>
      <div class="calendar-component-body-cell-event__event-title">
        {{ eventTitle }}
      </div>
    </ButtonComponent>
  </transition>
</template>

<script>
import formatDates from '@/utils/helpers/formatDates'
import { ButtonComponent } from '@/components/basicComponents'

export default {
  name: 'CalendarComponentBodyCellEvent',

  components: { ButtonComponent },
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
  },

  methods: {
    onClickTitle () {
      this.onClickEvent({ startDate: this.startDate, endDate: this.endDate, eventTitle: this.eventTitle })
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

.event-enter-active,
.event-leave-active {
  transition: all 0.25s;
}

.event-enter {
  transform: translateY(100%);
  opacity: 0;
}

.event-leave-to {
  opacity: 0;
  height: 0;
}
</style>
