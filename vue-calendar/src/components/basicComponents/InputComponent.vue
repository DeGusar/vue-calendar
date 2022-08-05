<template>
  <input
    :id="id"
    :placeholder="placeHolder"
    class="input-component"
    :type="type"
    :value="value"
    :class="invalidClass"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'InputComponent',

  props: {
    placeHolder: {
      type: String,
      default: 'Placeholder'
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number, Date],
      required: true
    },
    invalid: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    }
  },

  computed: {
    invalidClass () {
      return this.invalid ? 'input-component--invalid' : ''
    }
  }

}
</script>

<style lang="scss">
  .input-component {
    width: 100%;
    height: 55px;
    padding: 16.5px 14px;
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
</style>
