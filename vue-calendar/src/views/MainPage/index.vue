<template>
  <div class="main-page">
    <MainPageSidebar
      :picked-day="pickedDay"
      @update-picked-day="onUpdatePickedDate"
    />
    <div class="main-page__content">
      <MainPageHeader
        :picked-day="pickedDay"
        @update-picked-day="onUpdatePickedDate"
        @move-to-today="onMoveToToday"
        @change-month="onChangeMonth"
      />
      <CalendarComponent
        :current-day="currentDay"
        :picked-day="pickedDay"
        :dates-data="datesData"
        :on-click-event="onClickEvent"
        :on-click-unpicked-cell="onClickUnpickedCell"
        :on-click-picked-cell="onClickPickedCell"
      />
    </div>
    <CalendarCreateEventModal
      :users-list="usersList"
      :meeting-rooms="meetingRooms"
      @create-event="onCreateEvent"
    />
    <CalendarViewEventModal />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import formatDates from '@/utils/helpers/formatDates'
import MainPageHeader from './MainPageHeader.vue'
import MainPageSidebar from './MainPageSidebar.vue'
import CalendarComponent from '@/components/CalendarComponent'
import { CalendarCreateEventModal, CalendarViewEventModal } from '@/views/MainPage/MainPageModals'

// TODO function will be removed
const getData = (firstDayOfTheCalendar, lastDayOfTheCalendar) => {
  const startDate = new Date(firstDayOfTheCalendar)
  const endDate = new Date(lastDayOfTheCalendar)
  const result = []
  while (startDate.getTime() < endDate.getTime()) {
    result.push({ date: new Date(startDate), eventsData: [{ startDate: new Date(), endDate: new Date(), eventTitle: ' Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test' }, { startDate: new Date(), endDate: new Date(), eventTitle: '123' }] })
    startDate.setDate(startDate.getDate() + 1)
  }

  return result
}

export default {
  name: 'MainPage',

  components: { MainPageHeader, MainPageSidebar, CalendarComponent, CalendarCreateEventModal, CalendarViewEventModal },

  data: () => ({
    activeMonthDatesInterval: formatDates.getActiveMonthDatesInterval(new Date()),
    meetingRooms: [300, 301, 302, 303, 304, 305]
  }),

  computed: {
    ...mapGetters('mainPageModule', ['currentDay', 'pickedDay', 'usersList']),
    datesData () {
      return getData(...this.activeMonthDatesInterval)
    }
  },

  watch: {
    pickedDay (newPickedDay, oldPickedDay) {
      const isMonthOfPickedDateSameAsCurrentMonth = formatDates.areSameMonths(newPickedDay, oldPickedDay)

      if (!isMonthOfPickedDateSameAsCurrentMonth) {
        this.activeMonthDatesInterval = formatDates.getActiveMonthDatesInterval(newPickedDay)
      }
    }
  },

  async created () {
    await this.getUsersList()
  },

  methods: {
    ...mapActions('mainPageModule', {
      onUpdatePickedDate: 'updatePickedDay',
      getUsersList: 'getUsersList'
    }),
    onClickUnpickedCell (cellDate) {
      this.onUpdatePickedDate(cellDate)
    },
    onClickPickedCell (cellDate) {
      this.$modal.show('calendar-create-event-modal', { cellDate })
    },
    onClickEvent (eventData) {
      this.$modal.show('calendar-view-event-modal', eventData)
    },

    // TODO add function for event creation
    onCreateEvent (eventData) {
      this.$modal.hide('calendar-create-event-modal')
    },
    onChangeMonth (monthsDifference) {
      const changedMonth = new Date(this.pickedDay)
      const firstOfTheMonth = 1
      changedMonth.setDate(firstOfTheMonth)
      changedMonth.setMonth(this.pickedDay.getMonth() + monthsDifference)

      const isSameMonth = changedMonth.getMonth() === this.currentDay.getMonth()
      const isSameYear = changedMonth.getFullYear() === this.currentDay.getFullYear()

      if (isSameMonth && isSameYear) {
        this.onUpdatePickedDate(this.currentDay)
      } else {
        this.onUpdatePickedDate(changedMonth)
      }
    },
    onMoveToToday () {
      this.onUpdatePickedDate(this.currentDay)
    }
  }
}

</script>

<style lang="scss">
.main-page {
  display: flex;
  height: 100%;

  &__content {
    flex-grow: 1;
  }
}
</style>
