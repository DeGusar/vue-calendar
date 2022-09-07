<template>
  <CalendarModal
    modal-name="calendar-create-event-modal"
    class="calendar-create-event-modal"
    modal-width="550"
    @modal-params="onModalParamsChange"
  >
    <template #body>
      <CalendarCreateEventModalForm
        ref="modalForm"
        :users-list="usersList"
        :event-day-date="eventDayDate"
        @create-event="$emit('create-event', $event)"
      />
    </template>
    <template #controls>
      <ButtonComponent
        variant="contained"
        class="calendar-create-event-modal__controls-save"
        @click="onClickSubmit"
      >
        Save
      </ButtonComponent>
      <ButtonComponent
        variant="outlined"
        class="calendar-create-event-modal__controls-discard"
        @click="$modal.hide('calendar-create-event-modal')"
      >
        Discard
      </ButtonComponent>
    </template>
  </CalendarModal>
</template>

<script>
import { ButtonComponent } from '@/components/basicComponents'
import { CalendarModal } from '@/components/pageElements'
import CalendarCreateEventModalForm from './CalendarCreateEventModalForm'

export default {
  name: 'CalendarCreateEventModal',

  components: { ButtonComponent, CalendarModal, CalendarCreateEventModalForm },

  props: {
    usersList: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    eventDayDate: null
  }),

  methods: {
    onClickSubmit () {
      this.$refs.modalForm.submit()
    },

    onModalParamsChange ({ cellDate }) {
      this.eventDayDate = cellDate
    }
  }
}
</script>

<style lang="scss">
  .calendar-create-event-modal {
    &__controls-save {
      background-color: $color-blue;
      text-transform: none;
      border-radius: 0;
      border: 1px solid $color-blue;

      &:hover {
        background-color: $color-blue-dark;
      }
    }

    &__controls-discard {
      text-transform: none;
      border: 1px solid $color-black;
      border-radius: 0;
      color: $color-black;

      &:hover {
        color: $color-black;
        background-color: $color-blue-lighter;
      }
    }
  }
</style>
