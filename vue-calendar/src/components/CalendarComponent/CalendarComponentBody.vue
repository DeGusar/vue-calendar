<template>
  <div class="calendar-component-body">
    <div
      v-for="(date, index) in datesData"
      :key="index"
      class="calendar-component-body__cell"
    >
      {{ date }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'CalendarComponentBody',

  props: {
    currentDay: {
      type: Date,
      required: true
    },
    pickedDay: {
      type: [String, Date],
      required: true
    },
    datesData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .calendar-component-body {
    width: 100%;
    height: calc(100% - 48px);
    font-size: $font-size-small;
    display: flex;
    flex-wrap: wrap;
    row-gap: 0;
    align-items: start;
    column-gap: 0;

    &__cell {
      width: calc(100% / 7);
      height: calc((100% / 5));
      padding: 9px 12px;
      border-bottom: 1px solid $color-black-light;
    }
  }
</style>
