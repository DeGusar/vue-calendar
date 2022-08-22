<template>
  <div class="main-page-sidebar">
    <div class="main-page-sidebar__header" />
    <div class="main-page-sidebar__content">
      <vc-calendar
        ref="calendar"
        :attributes="attrs"
        class="main-page-sidebar__content-calendar"
        @dayclick="onDayClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPageSidebar',

  props: {
    pickedDay: {
      type: [Date, String],
      required: true
    }
  },

  computed: {
    attrs () {
      return [
        {
          highlight: {
            color: 'blue',
            fillMode: 'solid'
          },
          dates: new Date()
        },
        {
          highlight: {
            contentClass: 'checked-day'
          },
          dates: this.pickedDay
        }
      ]
    }
  },

  watch: {
    pickedDay (newPickedDay) {
      this.moveToDate(newPickedDay)
    }
  },

  methods: {
    onDayClick (day) {
      this.$emit('updatePickedDay', new Date(day.id))
    },

    moveToDate (date) {
      this.$refs.calendar.move({ month: new Date(date).getMonth() + 1, year: new Date(date).getFullYear() })
    }
  }

}
</script>

<style lang="scss">
  .main-page-sidebar {
    width: 274px;
    background-color: $color-grey;
    height: 100%;
    border: 1px solid $neutral-light;

    &__header {
      height: $main-page-header;
      border: 1px solid $neutral-light;
    }

    &__content {
      padding: 12px;
    }
  }

  .checked-day {
    position: relative;
    border-radius: 0;

    &::before {
      content: "";
      position: absolute;
      border: 1px solid $color-black;
      inset: -2px;
    }
  }
</style>
