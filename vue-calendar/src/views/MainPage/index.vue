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
        :dates-data="datesData"
        :current-day="currentDay"
        :picked-day="pickedDay"
        :on-click-event="onClickEvent"
        :on-click-unpicked-cell="onClickUnpickedCell"
        :on-click-picked-cell="onClickPickedCell"
        :rows-quantity-in-calendar="rowsQuantityInCalendar"
      />
    </div>
    <CalendarCreateEventModal
      :users-list="usersList"
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
const getData = (firstDayOfTheCalendar, rowsQuantity) => {
  const D = new Date(firstDayOfTheCalendar)
  const Till = new Date(firstDayOfTheCalendar)
  const calendarSize = 7 * rowsQuantity
  Till.setDate(Till.getDate() + calendarSize)
  const result = []
  while (D.getTime() < Till.getTime()) {
    result.push({ date: new Date(D), eventsData: [{ startDate: new Date(), endDate: new Date(), eventTitle: ' Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test' }, { startDate: new Date(), endDate: new Date(), eventTitle: 'Test' }, { startDate: new Date(), endDate: new Date(), eventTitle: 'Test' }, { startDate: new Date(), endDate: new Date(), eventTitle: 'Test' }, { startDate: new Date(), endDate: new Date(), eventTitle: '123' }] })
    D.setDate(D.getDate() + 1)
  }

  return result
}

export default {
  name: 'MainPage',

  components: { MainPageHeader, MainPageSidebar, CalendarComponent, CalendarCreateEventModal, CalendarViewEventModal },

  data: () => ({
    firstDayOfTheCalendar: formatDates.getFirstCellInCalendar(new Date()).date
  }),

  computed: {
    ...mapGetters('mainPageModule', ['currentDay', 'pickedDay', 'usersList', 'rowsQuantityInCalendar']),
    datesData () {
      return getData(this.firstDayOfTheCalendar, this.rowsQuantityInCalendar)
    }

  },

  watch: {
    pickedDay (newPickedDay) {
      const [lastItem] = this.datesData.slice(-1)
      const lastDayOfTheCalendar = lastItem.date
      const isPickedDateBeforeFirstDayOfTheCalendar = formatDates.isFirstDateBeforeSecondDate(newPickedDay, this.firstDayOfTheCalendar)
      const isPickedDateAfterLastDayOfTheCalendar = formatDates.isFirstDateBeforeSecondDate(lastDayOfTheCalendar, newPickedDay)

      if (isPickedDateBeforeFirstDayOfTheCalendar || isPickedDateAfterLastDayOfTheCalendar) {
        const { date, rowsQuantity } = formatDates.getFirstCellInCalendar(newPickedDay)
        this.firstDayOfTheCalendar = date
        this.updateRowsQuantityInCalendar(rowsQuantity)
      }
    }
  },

  async created () {
    await this.getUsersList()
  },

  methods: {
    ...mapActions('mainPageModule', {
      onUpdatePickedDate: 'updatePickedDay',
      getUsersList: 'getUsersList',
      updateRowsQuantityInCalendar: 'updateRowsQuantityInCalendar'
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
      changedMonth.setDate(1)
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
