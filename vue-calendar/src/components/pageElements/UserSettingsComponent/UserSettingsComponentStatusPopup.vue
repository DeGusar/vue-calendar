<template>
  <div class="user-settings-component-stasus-popup">
    <div
      v-for="status in statuses"
      :key="status.text"
      class="user-settings-component-stasus-popup__status"
      @click="onClickUserStatus(status)"
    >
      <span
        class="user-settings-component-stasus-popup__status-logo"
        :style="{background: `no-repeat center/100% url(${status.src})`}"
      />
      {{ status.text }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    statuses: [
      {
        text: 'Available',
        src: 'https://res.cloudinary.com/rss-collection/image/upload/v1660259573/calendar/active_cgujh6.svg'
      },
      {
        text: 'Busy',
        src: 'https://res.cloudinary.com/rss-collection/image/upload/v1660338705/calendar/busy_hxq0kh.svg'
      },
      {
        text: 'Do not disturb',
        src: 'https://res.cloudinary.com/rss-collection/image/upload/v1660338829/calendar/disturb_utufpw.svg'
      },
      {
        text: 'Be right back',
        src: 'https://res.cloudinary.com/rss-collection/image/upload/v1660339954/calendar/soon_fljbhg.svg'
      },
      {
        text: 'Appear away',
        src: 'https://res.cloudinary.com/rss-collection/image/upload/v1660339954/calendar/soon_fljbhg.svg'
      },
      {
        text: 'Appear offline',
        src: 'https://res.cloudinary.com/rss-collection/image/upload/v1660338931/calendar/offline_hdsdwo.svg'
      }
    ]
  }),

  methods: {
    ...mapActions('userSettings', ['updateUserStatus']),
    onClickUserStatus (status) {
      this.updateUserStatus(status)
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
  .user-settings-component-stasus-popup {
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
