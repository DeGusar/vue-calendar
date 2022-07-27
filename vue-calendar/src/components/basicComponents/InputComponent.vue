<template>
  <input
    :placeholder="placeHolder"
    class="input-component"
    :type="type"
    :value="value"
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
    }
  }
}
</script>

<style lang="scss">
  .input-component {
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
    padding: 16.5px 14px;
    font-size: $font-size-base;
    line-height: 2.1rem;
    color: $color-black;
    border: 1px solid $color-black-light;
    border-radius: 4px;

    &:hover {
      border: 2px solid $color-black;
    }

    &:focus {
      border: 2px solid $color-black;
    }
  }
</style>
