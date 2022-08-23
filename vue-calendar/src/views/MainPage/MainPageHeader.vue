<template>
  <div class="main-page-header">
    <div class="main-page-header__controls">
      <button
        class="main-page-header__controls-button-today"
        @click="onClickToday"
      >
        Today
      </button>
      <button
        class="main-page-header__controls-button-back"
        @click="$emit('move-to-previous-month')"
      />
      <button
        class="main-page-header__controls-button-forward"
        @click="$emit('move-to-next-month')"
      />
      <button class="main-page-header__controls-date-picker">
        {{ readablePickedDate }}
      </button>
    </div>
    <button class="main-page-header__format-switcher">
      Month
    </button>
  </div>
</template>

<script>
import formatDate from '@/utils/helpers/formatDates'

export default {
  name: 'MainPageHeader',

  props: {
    pickedDay: {
      type: [Date, String],
      required: true
    }
  },

  computed: {
    readablePickedDate () {
      return formatDate.MMMMYYYY(this.pickedDay)
    }
  },

  methods: {
    onClickToday () {
      this.$emit('update-picked-day', new Date())
      this.$emit('move-to-today')
    }
  }
}
</script>

<style lang="scss">
  .main-page-header {
    background-color: $color-grey;
    height: $main-page-header;
    border: 1px solid $neutral-light;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__controls {
      display: flex;
      align-items: center;
      column-gap: 15px;
    }

    &__controls-button-today {
      height: 32px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 8px;

      &:hover {
        background-color: $neutral-primary;
      }

      &::before {
        content: "";
        width: 18px;
        height: 18px;
        margin-right: 8px;
        background: no-repeat center/100% $calendar-image-url;
        filter: invert(36%) sepia(89%) saturate(1967%) hue-rotate(173deg) brightness(95%) contrast(101%);
      }
    }

    &__controls-button-back {
      width: 32px;
      height: 32px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: $neutral-primary;
      }

      &::before {
        content: "";
        width: 16px;
        height: 16px;
        background: no-repeat center/16px $arrow-up-url;
        filter: invert(36%) sepia(89%) saturate(1967%) hue-rotate(173deg) brightness(95%) contrast(101%);
      }
    }

    &__controls-button-forward {
      width: 32px;
      height: 32px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: $neutral-primary;
      }

      &::before {
        content: "";
        width: 16px;
        height: 16px;
        background: no-repeat center/16px $arrow-down-url;
        filter: invert(36%) sepia(89%) saturate(1967%) hue-rotate(173deg) brightness(95%) contrast(101%);
      }
    }

    &__controls-date-picker {
      height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;

      &:hover {
        background-color: $neutral-primary;
      }

      &::after {
        content: "";
        width: 12px;
        height: 6px;
        margin-left: 15px;
        background: no-repeat center/100% $arrow-down-image-url;
      }
    }

    &__format-switcher {
      height: 32px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 8px;

      &:hover {
        background-color: $neutral-primary;
      }

      &::before {
        content: "";
        width: 18px;
        height: 18px;
        margin-right: 8px;
        background: no-repeat center/100% $calendar-week-image-url;
        filter: invert(36%) sepia(89%) saturate(1967%) hue-rotate(173deg) brightness(95%) contrast(101%);
      }

      &::after {
        content: "";
        width: 12px;
        height: 6px;
        margin-left: 15px;
        background: no-repeat center/100% $arrow-down-image-url;
      }
    }
  }
</style>
