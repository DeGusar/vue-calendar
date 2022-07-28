<template>
  <button
    class="button-component"
    :type="type"
    :disabled="disabled"
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
    }
  }
}
</script>

<style lang="scss">
  .button-component {
    background-color: $color-purple-dark;
    font-size: $font-size-base;
    color: $color-white;
    padding: 6px 10px;
    text-transform: uppercase;
    border: 1px solid $color-purple;
    border-radius: 4px;

    &:hover {
      background-color: $color-purple;
      color: $color-white;
    }

    &:disabled {
      pointer-events: none;
      filter: grayscale(100%);
    }
  }
</style>
