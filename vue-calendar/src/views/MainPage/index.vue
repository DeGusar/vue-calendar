<template>
  <div class="main-page">
    <MainPageSidebar
      ref="sideBar"
      :picked-day="pickedDay"
      @updatePickedDay="onUpdatePickedDate"
    />
    <div class="main-page__content">
      <MainPageHeader
        :picked-day="pickedDay"
        @updatePickedDay="onUpdatePickedDate"
        @moveToToday="onMoveToToday"
        @moveToPreviousMonth="onMoveToPreviousMonth"
        @moveToNextMonth="onMoveToNextMonth"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MainPageHeader from './MainPageHeader.vue'
import MainPageSidebar from './MainPageSidebar.vue'

export default {
  name: 'MainPage',

  components: { MainPageHeader, MainPageSidebar },

  computed: {
    ...mapGetters('mainPageModule', ['currentDay', 'pickedDay'])
  },

  methods: {
    ...mapActions('mainPageModule', {
      onUpdatePickedDate: 'updatePickedDay'
    }),

    onMoveToPreviousMonth () {
      const previousMonth = new Date(this.pickedDay)
      previousMonth.setDate(1)
      previousMonth.setMonth(this.pickedDay.getMonth() - 1)

      if (previousMonth.getMonth() === this.currentDay.getMonth() && previousMonth.getFullYear() === this.currentDay.getFullYear()) {
        this.onUpdatePickedDate(this.currentDay)
      } else {
        this.onUpdatePickedDate(previousMonth)
      }
    },

    onMoveToToday () {
      this.onUpdatePickedDate(this.currentDay)
    },

    onMoveToNextMonth () {
      const nextMonth = new Date(this.pickedDay)
      nextMonth.setDate(1)
      nextMonth.setMonth(this.pickedDay.getMonth() + 1)

      if (nextMonth.getMonth() === this.currentDay.getMonth() && nextMonth.getFullYear() === this.currentDay.getFullYear()) {
        this.onUpdatePickedDate(this.currentDay)
      } else {
        this.onUpdatePickedDate(nextMonth)
      }
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
