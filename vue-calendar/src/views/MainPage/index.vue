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
