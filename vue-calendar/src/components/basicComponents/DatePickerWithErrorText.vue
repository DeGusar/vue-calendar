<template>
  <div class="date-picker-with-error-text">
    <input
      :id="id"
      :value="formattedValue"
      class="date-picker-with-error-text__input"
      :class="{'date-picker-with-error-text__input--invalid': invalid}"
      type="date"
      @input="onInput"
    >
    <p
      v-if="invalid"
      class="date-picker-with-error-text__text"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import formatDates from '@/utils/helpers/formatDates'

export default {
  name: 'DatePickerWithErrorText',

  props: {
    value: {
      type: Date,
      required: true
    },
    invalid: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },

  computed: {
    formattedValue () {
      return formatDates.fullDateToString(this.value)
    }
  },

  methods: {
    onInput (event) {
      this.$emit('input', new Date(event.target.value))
    }
  }
}
</script>

<style lang="scss">
  .date-picker-with-error-text {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    &__text {
      color: $color-red;
      font-size: $font-size-small;
      padding: 5px 0 0  15px;
    }

    &__input {
      width: 100%;
      height: 55px;
      padding: 15px;
      font-size: $font-size-base;
      line-height: 2.1rem;
      color: $color-black;
      border: 1px solid $color-black-light;
      border-radius: 4px;

      &:hover {
        border-width: 2px;
      }

      &:focus {
        border-width: 2px;
      }

      &--invalid {
        border-color: $color-red;

        &::placeholder {
          color: $color-red;
        }
      }
    }
  }
</style>
