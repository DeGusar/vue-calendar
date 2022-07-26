<template>
  <button
    class="button-component"
    :type="type"
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
    }
  }
}
</script>

<style lang="scss">
  .button-component {
    background-color: $color-white;
    font-size: $font-size-base;
    color: $color-purple;
    padding: 6px 10px;
    text-transform: uppercase;
    border: 1px solid $color-purple;
    border-radius: 4px;

    &:hover {
      background-color: $color-purple-dark;
      color: $color-white;
    }
  }
</style>
