<template>
  <modal
    :name="modalName"
    class="calendar-modal"
    height="auto"
    :width="modalWidth"
    @before-open="$emit('modal-params', $event.params)"
  >
    <div class="calendar-modal__header" />
    <div class="calendar-modal__body">
      <slot name="body" />
    </div>
    <div class="calendar-modal__controls">
      <slot name="controls" />
    </div>
  </modal>
</template>

<script>
export default {
  name: 'CalendarModal',

  props: {
    modalName: {
      type: String,
      required: true
    },
    modalWidth: {
      type: String,
      required: true
    }
  },

  data: () => ({
    modalParams: () => ({})
  })
}

</script>

<style lang="scss">
  .calendar-modal {
    display: flex;
    border-radius: 4px;

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
