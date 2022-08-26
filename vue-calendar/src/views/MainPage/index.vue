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
        :picked-day="new Date('2022-08-18')"
        :on-click-event="onClickEvent"
        :on-click-cell="onClickCell"
        :on-click-picked-cell="onClickPickedCell"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MainPageHeader from './MainPageHeader.vue'
import MainPageSidebar from './MainPageSidebar.vue'
import CalendarComponent from '@/components/CalendarComponent'

const getData = () => {
  const D = new Date('2022-07-29')
  const Till = new Date('2022-09-02')
  const result = []

  function pad (s) { return ('00' + s).slice(-2) }

  while (D.getTime() < Till.getTime()) {
    result.push({ date: '' + D.getFullYear() + '-' + pad(D.getMonth() + 1) + '-' + pad(D.getDate()), eventsData: [{ startDate: new Date(), endDate: new Date(), eventTitle: 'Test' }, { startDate: new Date(), endDate: new Date(), eventTitle: 'Test' }] })
    D.setDate(D.getDate() + 1)
  }

  return result
}

export default {
  name: 'MainPage',

  components: { MainPageHeader, MainPageSidebar, CalendarComponent },

  data: () => ({
    datesData: getData()
  }),

  computed: {
    ...mapGetters('mainPageModule', ['currentDay', 'pickedDay'])
  },

  methods: {
    ...mapActions('mainPageModule', {
      onUpdatePickedDate: 'updatePickedDay'
    }),
    onClickCell () {
      console.log('cell')
    },
    onClickPickedCell () {
      console.log('picked-cell')
    },
    onClickEvent () {
      console.log('event')
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
