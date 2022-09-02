<template>
  <div class="main-page-header">
    <div class="main-page-header__controls">
      <ButtonComponent
        class="main-page-header__controls-button-today"
        @click="onClickToday"
      >
        Today
      </ButtonComponent>
      <ButtonComponent
        class="main-page-header__controls-button-back"
        @click="$emit('change-month', -1)"
      />
      <ButtonComponent
        class="main-page-header__controls-button-forward"
        @click="$emit('change-month', 1)"
      />
      <ButtonComponent class="main-page-header__controls-date-picker">
        {{ readablePickedDate }}
      </ButtonComponent>
    </div>
    <ButtonComponent class="main-page-header__format-switcher">
      Month
    </ButtonComponent>
  </div>
</template>

<script>
import formatDate from '@/utils/helpers/formatDates'
import { ButtonComponent } from '@/components/basicComponents'

export default {
  name: 'MainPageHeader',

  components: { ButtonComponent },

  props: {
    pickedDay: {
      type: [Date, String],
      required: true
    }
  },

  computed: {
    readablePickedDate () {
      return formatDate.toLongMonthAndYear(this.pickedDay)
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
@mixin icon($content: "", $background) {
  content: $content;
  background: no-repeat center/100% $background;
}

.main-page-header {
  background-color: $color-grey;
  height: $main-page-header;
  border: 1px solid $color-beige-light;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__controls {
    display: flex;
    align-items: center;
    column-gap: 15px;
  }

  &__controls-button-today {
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;

    &:hover {
      background-color: $color-beige;
    }

    &::before {
      @include icon (
        $background: $calendar-image-url);

      width: 20px;
      height: 20px;
      margin-right: 10px;
      filter: $filter-blue-color;
    }
  }

  &__controls-button-back {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: $color-beige;
    }

    &::before {
      @include icon (
        $background: $arrow-up-url);

      width: 15px;
      height: 15px;
      filter: $filter-blue-color;
    }
  }

  &__controls-button-forward {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: $color-beige;
    }

    &::before {
      @include icon (
        $background: $arrow-down-url);

      width: 15px;
      height: 15px;
      filter: $filter-blue-color;
    }
  }

  &__controls-date-picker {
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 10px;

    &:hover {
      background-color: $color-beige;
    }

    &::after {
      @include icon (
        $background: $arrow-down-image-url);

      width: 10px;
      height: 5px;
      margin-left: 15px;
    }
  }

  &__format-switcher {
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;

    &:hover {
      background-color: $color-beige;
    }

    &::before {
      @include icon (
        $background: $calendar-week-image-url);

      width: 20px;
      height: 20px;
      margin-right: 10px;
      filter: $filter-blue-color;
    }

    &::after {
      @include icon (
        $background: $arrow-down-image-url);

      width: 10px;
      height: 5px;
      margin-left: 15px;
    }
  }
}
</style>
