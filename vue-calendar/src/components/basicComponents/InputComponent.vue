<template>
  <input
    :placeholder="placeHolder"
    class="input"
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
  .input {
    display: flex;
    align-items: center;
    width: 355px;
    height: 45px;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: rgb(3 3 3);
    border: 1px solid rgb(3 3 3);
  }
</style>
