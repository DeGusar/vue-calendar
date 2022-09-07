<template>
  <form
    novalidate
    class="calendar-create-event-modal-form"
  >
    <InputComponentWithErrorText
      v-model="eventTitle"
      place-holder="Add a title"
      class="calendar-create-event-modal-form__input-title"
    />
    <VSelect
      v-model="eventParticipants"
      class="calendar-create-event-modal-form__input-select"
      placeholder="Invite required attendees"
      :reduce="option => option.value"
      multiple
      :options="participants"
    />
    <div class="calendar-create-event-modal-form__dates">
      <DatePickerWithErrorText
        v-model="eventDate"
        class="calendar-create-event-modal-form__dates-picker"
      />
      <VSelect
        v-model="dateStartMeeting"
        class="calendar-create-event-modal-form__input-select calendar-create-event-modal-form__input-start "
        :reduce="option => option.value"
        :options="dateStartMeetingOptions"
      />
      to
      <VSelect
        v-model="dateEndMeeting"
        :reduce="option => option.value"
        class="calendar-create-event-modal-form__input-select calendar-create-event-modal-form__input-end"
        :options="filteredDateEndMeetingOptions"
      />
    </div>
    <VSelect
      v-model="roomMeeting"
      placeholder="Search for a room"
      class="calendar-create-event-modal-form__input-select"
      :options="roomMeetingOptions"
    />
    <TextareaComponent
      v-model="eventDescription"
      place-holder="Add a description"
      class="calendar-create-event-modal-form__textarea"
    />
  </form>
</template>

<script>
import { InputComponentWithErrorText, DatePickerWithErrorText, TextareaComponent } from '@/components/basicComponents'
import formatDates from '@/utils/helpers/formatDates'

const get24hoursDividedBy30Minutes = (eventDayDate) => {
  if (eventDayDate) {
    const D = new Date(eventDayDate)
    D.setHours(0, 0, 0, 0)
    const oneDay = 86400000
    const Till = new Date(D.getTime() + oneDay)
    Till.setHours(0, 30, 0, 0)
    const halfHour = 30 * 60 * 1000
    const result = []

    while (D.getTime() < Till.getTime()) {
      result.push({ label: formatDates.to12HoursWithMinutesFormat(new Date(D)), value: new Date(D) })
      D.setTime(new Date(D.getTime() + halfHour))
    }

    return { startOptions: result.slice(0, result.length - 1), endOptions: result }
  }
}

export default {
  name: 'CalendarCreateEventModalForm',

  components: { InputComponentWithErrorText, DatePickerWithErrorText, TextareaComponent },

  props: {
    usersList: {
      type: Array,
      required: true
    },
    eventDayDate: {
      type: Date,
      required: true
    }
  },

  data: function () {
    return {
      eventTitle: '',
      eventDate: formatDates.setCurrentTime(this.eventDayDate),
      dateStartMeeting: formatDates.roundToNearest30(formatDates.setCurrentTime(this.eventDayDate)),
      dateStartMeetingOptions: get24hoursDividedBy30Minutes(this.eventDayDate).startOptions,
      dateEndMeeting: formatDates.roundToNearest30(formatDates.addHalfHour(formatDates.setCurrentTime(this.eventDayDate))),
      dateEndMeetingOptions: get24hoursDividedBy30Minutes(this.eventDayDate).endOptions,
      eventParticipants: [],
      eventDescription: '',
      roomMeeting: null,
      roomMeetingOptions: [300, 301, 302, 303, 304, 305]
    }
  },

  computed: {
    filteredDateEndMeetingOptions () {
      return this.dateEndMeetingOptions.filter(option => formatDates.isFirstDateBeforeSecondDate(this.dateStartMeeting, option.value))
    },
    participants () {
      return this.usersList.map(userListItem => ({ value: userListItem.id, label: `${userListItem.firstName} ${userListItem.lastName}` }))
    }
  },

  watch: {
    dateStartMeeting (newDateStartMeeting) {
      if (formatDates.isFirstDateBeforeSecondDate(this.dateEndMeeting, newDateStartMeeting)) {
        this.dateEndMeeting = formatDates.addHalfHour(newDateStartMeeting)
      }
    }
  },

  methods: {
    submit () {
      this.$emit('create-event', {
        eventTitle: this.eventTitle || '(No subject)',
        dateStartMeeting: this.dateStartMeeting,
        dateEndMeeting: this.dateEndMeeting,
        eventParticipants: this.eventParticipants,
        eventDescription: this.eventDescription
      })
    }
  }

}
</script>

<style lang="scss">
.calendar-create-event-modal-form {
  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;

  &__dates {
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: 100%;
  }

  &__input-select {
    width: 100%;

    /* stylelint-disable-next-line selector-class-pattern */
    & .vs__dropdown-toggle {
      padding: 15px;
      height: 55px;
      border: 1px solid $color-black-light;
      font-size: $font-size-base;

      &:hover {
        border-width: 2px;
      }
    }

    /* stylelint-disable-next-line selector-class-pattern */
    & .vs__clear {
      display: none;
    }

    /* stylelint-disable-next-line selector-class-pattern */
    & .vs__selected {
      margin: 0;
      padding: 0;
      font-size: $font-size-base;
    }

    /* stylelint-disable-next-line selector-class-pattern */
    & .vs__selected-options {
      column-gap: 5px;
    }

    /* stylelint-disable-next-line selector-class-pattern */
    & .vs__search {
      padding: 0;
      color: $color-black;
      font-size: $font-size-base;
      margin: 0;

      &::placeholder {
        color: $color-grey-light;
      }
    }
  }

  &__dates-picker {
    border: none;
  }

  &__input-title {
    width: 100%;
    border: none;
  }

  &__textarea {
    width: 100%;
    height: 80px;
  }
}
</style>
