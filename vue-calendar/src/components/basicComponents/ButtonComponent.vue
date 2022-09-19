<template>
  <button
    :type="type"
    :disabled="disabled"
    class="button-component"
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',

  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'text'
    }
  },

  computed: {
    buttonClasses () {
      const rootClass = 'button-component'

      return {
        [`${rootClass}--text`]: this.variant === 'text',
        [`${rootClass}--contained`]: this.variant === 'contained',
        [`${rootClass}--outlined`]: this.variant === 'outlined'
      }
    }
  }
}
</script>

<style lang="scss">
  .button-component {
    border-radius: 4px;

    &:disabled {
      pointer-events: none;
      filter: grayscale(100%);
    }

    &:focus {
      border: 1px solid $color-black;
    }

    &--contained {
      background-color: $color-purple-dark;
      padding: 5px 10px;
      font-size: $font-size-base;
      color: $color-white;
      text-transform: uppercase;
      border: 1px solid $color-purple;

      &:hover {
        background-color: $color-purple;
        color: $color-white;
      }
    }

    &--outlined {
      background-color: $color-white;
      padding: 5px 10px;
      font-size: $font-size-base;
      color: $color-purple-dark;
      text-transform: uppercase;
      border: 1px solid $color-purple;

      &:hover {
        background-color: $color-purple;
        color: $color-white;
      }
    }
  }
</style>
