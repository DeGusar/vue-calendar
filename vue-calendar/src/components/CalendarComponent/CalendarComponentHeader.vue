<template>
  <div class="calendar-component-header">
    <span
      v-for="dayOfTheWeek in daysOfTheWeek"
      :key="dayOfTheWeek"
      class="calendar-component-header__cell"
    >
      {{ dayOfTheWeek }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'CalendarComponentHeader',

  data: () => ({
    daysOfTheWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]
  })

}
</script>

<style lang='scss'>
  .calendar-component-header {
    width: 100%;
    height: 48px;
    display: flex;
    border-bottom: 1px solid $color-black-light;

    &__cell {
      font-size: $font-size-small;
      display: flex;
      align-items: end;
      vertical-align: bottom;
      width: calc(100% / 7);
      padding: 9px 12px;
      height: 100%;
      text-align: left;
    }
  }
</style>
