<template>
  <ModalTemplate
    modal-name="calendar-view-event-modal"
    modal-width="380"
    modal-height="220"
    class="calendar-view-event-modal"
    @modal-params="onModalParamsChange"
  >
    <template #body>
      <p class="calendar-view-event-modal__title">
        {{ eventData.eventTitle }}
      </p>
      <p class="calendar-view-event-modal__date">
        {{ formattedEventTime }}
      </p>
      <p class="calendar-view-event-modal__calendar">
        Calendar
      </p>
    </template>
    <template #controls>
      <ButtonComponent class="calendar-view-event-modal__edit">
        Edit
      </ButtonComponent>
      <ButtonComponent class="calendar-view-event-modal__delete">
        Delete
      </ButtonComponent>
    </template>
  </ModalTemplate>
</template>

<script>
import { ButtonComponent } from '@/components/basicComponents'
import { ModalTemplate } from '@/components/pageElements'
import formatDates from '@/utils/helpers/formatDates'

export default {
  name: 'CalendarViewEventModal',
  components: { ModalTemplate, ButtonComponent },

  data: () => ({
    eventData: () => ({})
  }),

  computed: {
    formattedEventTime () {
      return `${formatDates.toFullDate(this.eventData.startDate)} ${formatDates.to12HoursWithMinutesFormat(this.eventData.startDate)} - ${formatDates.to12HoursWithMinutesFormat(this.eventData.endDate)}`
    }
  },

  methods: {
    onModalParamsChange (modalParams) {
      this.eventData = modalParams
    }
  }

}
</script>

<style lang="scss">
@mixin image() {
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: inherit;

  &:hover {
    background-color: $color-blue-light;
  }
}

.calendar-view-event-modal {
  display: flex;

  &__title {
    font-size: $font-size-large;
    color: $color-blue;
    margin-bottom: 15px;
    height: 25px;
  }

  &__date {
    position: relative;
    display: flex;
    align-items: center;
    height: 20px;
    padding-left: 25px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      background: no-repeat center/100% $calendar-clocks-image-url;
    }
  }

  &__calendar {
    position: relative;
    display: flex;
    align-items: center;
    height: 20px;
    margin-top: 10px;
    padding-left: 25px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      background: no-repeat center/100% $calendar-image-url;
    }
  }

  &__edit {
    @include image;

    &::before {
      @include icon (
        $background: $calendar-edit-image-url);

      width: 25px;
      height: 25px;
      margin: 0 5px 0 -5px;
      filter: $filter-blue-color;
    }
  }

  &__delete {
    @include image;

    &::before {
      @include icon (
        $background: $calendar-delete-event-image-url);

      width: 20px;
      height: 20px;
      margin-right: 10px;
      filter: $filter-blue-color;
    }
  }
}
</style>
