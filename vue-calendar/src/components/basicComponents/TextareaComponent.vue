<template>
  <textarea
    :id="id"
    :placeholder="placeHolder"
    :value="value"
    class="textarea-component"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'TextareaComponent',

  props: {
    placeHolder: {
      type: String,
      default: 'Placeholder'
    },
    value: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: null
    }
  }

}
</script>

<style lang="scss">
  .textarea-component {
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
  }
</style>
