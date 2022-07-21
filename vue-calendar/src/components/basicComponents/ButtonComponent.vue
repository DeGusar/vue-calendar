<template>
  <button
    class="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',

  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .button {
    background-color: rgb(255 255 255);
    font-size: 1.5rem;
    color: rgb(68 71 145);
    padding: 5px 10px;
    text-transform: uppercase;
    border: 1px solid rgb(68 71 145);

    &:hover {
      background-color: rgb(68 71 145);
      color: rgb(255 255 255);
      border-color: rgb(255 255 255);
    }
  }
</style>
