<template>
  <button
    class="button"
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
  .button {
    background-color: $color-white;
    font-size: $font-size-base;
    color: $color-purple;
    padding: 5px 10px;
    text-transform: uppercase;
    border: 1px solid $color-purple;

    &:hover {
      background-color: $color-purple-dark;
      color: $color-white;
    }
  }
</style>
