<template>
  <form
    novalidate
    class="calendar-create-event-modal-form"
    @submit.prevent
  >
    <InputComponentWithErrorText
      v-model="eventTitle"
      place-holder="Add a title"
      class="calendar-create-event-modal-form__input-title"
    />
    <VSelect
      v-model="eventParticipants"
      placeholder="Invite required attendees"
      multiple
      :reduce="reduceSelectOption"
      :options="participants"
      class="calendar-create-event-modal-form__input-select"
    />
    <div class="calendar-create-event-modal-form__dates">
      <DatePickerWithErrorText
        v-model="eventDate"
        class="calendar-create-event-modal-form__dates-picker"
      />
      <VSelect
        v-model="dateStartMeeting"
        :reduce="reduceSelectOption"
        :options="dateStartMeetingOptions"
        class="calendar-create-event-modal-form__input-select"
      />
      to
      <VSelect
        v-model="dateEndMeeting"
        :reduce="reduceSelectOption"
        :options="filteredDateEndMeetingOptions"
        class="calendar-create-event-modal-form__input-select"
      />
    </div>
    <VSelect
      v-model="roomMeeting"
      placeholder="Search for a room"
      :options="meetingRooms"
      class="calendar-create-event-modal-form__input-select"
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
    const oneDayInMilliSeconds = 24 * 60 * 60 * 1000
    const halfHourInMilliSeconds = 30 * 60 * 1000
    const endOptions = []
    const startDate = new Date(eventDayDate)
    const endDate = new Date(startDate.getTime() + oneDayInMilliSeconds)
    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 30, 0, 0)

    while (startDate.getTime() < endDate.getTime()) {
      endOptions.push({ label: formatDates.to12HoursWithMinutesFormat(new Date(startDate)), value: new Date(startDate) })
      startDate.setTime(new Date(startDate.getTime() + halfHourInMilliSeconds))
    }

    return { startOptions: endOptions.slice(0, endOptions.length - 1), endOptions }
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
    },
    meetingRooms: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      eventTitle: '',
      eventDate: formatDates.setCurrentTime(this.eventDayDate),
      dateStartMeeting: formatDates.roundToNearest30(formatDates.setCurrentTime(this.eventDayDate)),
      dateStartMeetingOptions: get24hoursDividedBy30Minutes(this.eventDayDate).startOptions,
      dateEndMeeting: formatDates.roundToNearest30(formatDates.addHalfHour(formatDates.setCurrentTime(this.eventDayDate))),
      dateEndMeetingOptions: get24hoursDividedBy30Minutes(this.eventDayDate).endOptions,
      eventParticipants: [],
      eventDescription: '',
      roomMeeting: null
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
    },
    reduceSelectOption (option) {
      return option.value
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

    & .vs__dropdown-toggle {
      padding: 15px;
      height: 55px;
      border: 1px solid $color-black-light;
      font-size: $font-size-base;

      &:hover {
        border-width: 2px;
      }
    }

    & .vs__clear {
      display: none;
    }

    & .vs__selected {
      margin: 0;
      padding: 0;
      font-size: $font-size-base;
    }

    & .vs__selected-options {
      column-gap: 5px;
    }

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
