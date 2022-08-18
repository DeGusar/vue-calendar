<template>
  <div class="user-settings-component-status-popup">
    <div
      v-for="status in statuses"
      :key="status.text"
      class="user-settings-component-status-popup__status"
      @click="onClickUserStatus(status)"
    >
      <span
        class="user-settings-component-status-popup__status-logo"
        :style="{background: `no-repeat center/100% url(${status.src})`}"
      />
      {{ status.text }}
    </div>
  </div>
</template>

<script>
import { imageSources } from '@/utils/constants'

export default {
  data: () => ({
    statuses: [
      {
        text: 'Available',
        src: imageSources.AVAILABLE_STATUS_IMAGE_SRC
      },
      {
        text: 'Busy',
        src: imageSources.BUSY_STATUS_IMAGE_SRC
      },
      {
        text: 'Do not disturb',
        src: imageSources.DONT_DISTURB_STATUS_IMAGE_SRC
      },
      {
        text: 'Be right back',
        src: imageSources.SOON_STATUS_IMAGE_SRC
      },
      {
        text: 'Appear away',
        src: imageSources.AFC_STATUS_IMAGE_SRC
      },
      {
        text: 'Appear offline',
        src: imageSources.OFFLINE_STATUS_IMAGE_SRC
      }
    ]
  }),

  methods: {
    onClickUserStatus (status) {
      this.$emit('updateUserStatus', status)
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
  .user-settings-component-status-popup {
    position: absolute;
    width: 200px;
    padding: 6px 0;
    font-size: $font-size-small;
    background-color: $color-white;
    top: 110%;
    left: -45%;
    box-shadow: 0 0 2px rgb(0 0 0 / 12%), 0 8px 16px rgb(0 0 0 / 14%);

    &__status {
      cursor: pointer;
      position: relative;
      background-color: inherit;
      width: 100%;
      text-align: left;
      padding: 5px 40px;

      &:hover {
        background-color: $color-grey;
      }
    }

    &__status-logo {
      position: absolute;
      display: flex;
      top: 50%;
      left: 20px;
      transform: translate(0, -50%);
      width: 10px;
      height: 10px;
    }
  }
</style>
