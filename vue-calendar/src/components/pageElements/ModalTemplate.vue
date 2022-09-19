<template>
  <modal
    :name="modalName"
    :width="modalWidth"
    :height="modalHeight"
    class="modal-template"
    @before-open="$emit('modal-params', $event.params)"
  >
    <div class="modal-template__header" />
    <div class="modal-template__body">
      <slot name="body" />
    </div>
    <div class="modal-template__controls">
      <slot name="controls" />
    </div>
  </modal>
</template>

<script>
export default {
  name: 'ModalTemplate',

  props: {
    modalName: {
      type: String,
      required: true
    },
    modalWidth: {
      type: String,
      required: true
    },
    modalHeight: {
      type: String,
      required: true
    }
  }
}

</script>

<style lang="scss">
  .modal-template {
    display: flex;
    border-radius: 4px;

    & .vm--modal {
      overflow: visible;
    }

    &__header {
      height: 40px;
      background-color: $color-blue;
    }

    &__body {
      padding: 20px;
    }

    &__controls {
      height: 50px;
      padding: 10px;
      display: flex;
      column-gap: 10px;
      background-color: $color-blue-lightest;
    }
  }
</style>
