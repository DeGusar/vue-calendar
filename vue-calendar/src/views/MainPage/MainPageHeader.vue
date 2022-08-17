<template>
  <div class="main-page-header">
    <div class="main-page-header__controls">
      <button class="main-page-header__controls-button-today">
        Today
      </button>
      <button class="main-page-header__controls-button-back" />
      <button class="main-page-header__controls-button-forward" />
      <button class="main-page-header__controls-date-picker">
        {{ datePickerValue }}
      </button>
    </div>
    <button class="main-page-header__format-switcher">
      Month
    </button>
  </div>
</template>

<script>

export default {
  name: 'MainPageHeader',

  props: {
    datePickerValue: {
      type: [Date, String],
      required: true
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
        background: no-repeat center/100% url("https://res.cloudinary.com/rss-collection/image/upload/v1660745070/calendar/290104_calendar_clock_date_event_schedule_icon_qq0azb.svg");
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
        background: no-repeat center/16px url("https://res.cloudinary.com/rss-collection/image/upload/v1660746623/calendar/3671668_arrow_thin_up_icon_oo8nwf.svg");
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
        background: no-repeat center/16px url("https://res.cloudinary.com/rss-collection/image/upload/v1660746652/calendar/3671655_arrow_down_icon_pkjhjh.svg");
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
        background: no-repeat center/100% url("https://res.cloudinary.com/rss-collection/image/upload/v1660429714/calendar/2931160_down_direction_download_pointer_arrow_icon_lqd0xe.svg");
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
        background: no-repeat center/100% url("https://res.cloudinary.com/rss-collection/image/upload/v1660752582/calendar/9039893_calendar4_week_icon_ev3pnu.svg");
        filter: invert(36%) sepia(89%) saturate(1967%) hue-rotate(173deg) brightness(95%) contrast(101%);
      }

      &::after {
        content: "";
        width: 12px;
        height: 6px;
        margin-left: 15px;
        background: no-repeat center/100% url("https://res.cloudinary.com/rss-collection/image/upload/v1660429714/calendar/2931160_down_direction_download_pointer_arrow_icon_lqd0xe.svg");
      }
    }
  }
</style>
