<template>
  <div class="user-settings-component-popup">
    <div
      class="user-settings-component-popup__header"
    >
      <button
        class="user-settings-component-popup__header-button"
        @click="showModal"
      >
        <AvatarComponent
          class="user-settings-component-popup__header-avatar"
          :user-full-name="userFullName"
          :avatar-image-src="avatarImageSrc"
          :status-image-src="userStatus.src"
        />
      </button>
      <div class="user-settings-component-popup__header-content">
        <p>{{ `${userData.firstName} ${userData.lastName}` }}</p>
        <p class="user-settings-component-popup__header-content-status-email">
          {{ userData.email }}
        </p>
        <button
          class="user-settings-component-popup__header-content-status"
          @click="onClickUserStatus"
        >
          {{ userStatus.text }}
        </button>
        <UserSettingsComponentStatusPopup
          v-if="isUserStatusPopup"
          @closePopup="onClosePopup"
          @updateUserStatus="$emit('updateUserStatus', $event)"
        />
      </div>
    </div>
    <div class="user-settings-component-popup__divider" />
    <button
      class="user-settings-component-popup__button"
      @click="onClickStatisticButton"
    >
      Statistic
    </button>
    <div class="user-settings-component-popup__divider" />
    <button
      class="user-settings-component-popup__button"
      @click="$emit('logout')"
    >
      Logout
    </button>
    <UserSettingsComponentModal
      :avatar-image-src="avatarImageSrc"
      :is-saving="isSaving"
      @uploadImageToCloud="$emit('uploadImageToCloud', $event)"
    />
  </div>
</template>

<script>
import { AvatarComponent } from '@/components/basicComponents'
import UserSettingsComponentStatusPopup from './UserSettingsComponentStatusPopup'
import UserSettingsComponentModal from './UserSettingsComponentModal'
import { urlNames } from '@/utils/constants'

export default {
  name: 'HeaderComponentPopup',
  components: { AvatarComponent, UserSettingsComponentStatusPopup, UserSettingsComponentModal },
  props: {
    userFullName: {
      type: String,
      required: true
    },
    avatarImageSrc: {
      type: String,
      required: true
    },
    userData: {
      type: Object,
      required: true
    },
    userStatus: {
      type: Object,
      required: true
    },
    isSaving: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    isUserStatusPopup: false
  }),

  methods: {
    onClickUserStatus () {
      this.isUserStatusPopup = !this.isUserStatusPopup
    },
    onClosePopup () {
      this.isUserStatusPopup = false
      this.$emit('closePopup')
    },
    onClickStatisticButton () {
      this.$router.push({ name: urlNames.STATISTIC_PAGE })
      this.$emit('closePopup')
    },
    showModal () {
      this.$modal.show('user-settings-component-modal')
    }
  }
}
</script>

<style lang="scss">
.user-settings-component-popup {
  padding: 8px 0;
  position: absolute;
  width: 320px;
  background-color: $color-white;
  color: $color-black-font;
  top: 100%;
  right: 0;
  border-radius: 4px;
  box-shadow: 0 0 2px rgb(0 0 0 / 12%), 0 8px 16px rgb(0 0 0 / 14%);
  font-size: $font-size-base;

  &__divider {
    height: 2px;
    margin: 9px 0;
    overflow: hidden;
    background-color: $color-grey;
  }

  &__header {
    padding: 10px 20px;
    display: flex;
  }

  &__header-content {
    padding-left: 15px;
    position: relative;
  }

  &__header-content-email {
    font-size: $font-size-small;
  }

  &__header-content-status {
    font-size: $font-size-small;
    background-color: inherit;
    position: relative;
    padding: 0 20px 0 0;

    &::after {
      content: "";
      position: absolute;
      top: 60%;
      transform: translate(0, -50%);
      right: 0;
      width: 12px;
      height: 12px;
      background: no-repeat center/12px url("https://res.cloudinary.com/rss-collection/image/upload/v1660429714/calendar/2931160_down_direction_download_pointer_arrow_icon_lqd0xe.svg");
    }

    &:hover {
      color: $color-purple-light;
    }
  }

  &__header-avatar {
    width: 56px;
    height: 56px;
    cursor: pointer;
    font-size: $font-size-large;

    &:hover {
      color: inherit;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: rgba($color: #000, $alpha: 35%);
        pointer-events: none;
      }

      &::after {
        position: absolute;
        content: "";
        background-image: url("https://res.cloudinary.com/rss-collection/image/upload/v1660310631/calendar/5378817_camera_games_image_photo_screenshot_icon_pmh56g.svg");
        width: 40px;
        height: 40px;
        background-position: center center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        filter: brightness(0) invert(1);
        pointer-events: none;
      }
    }
  }

  &__header-button {
    background-color: inherit;
    border-radius: 50%;
  }

  &__button {
    cursor: pointer;
    font-size: $font-size-base;
    background-color: inherit;
    width: 100%;
    text-align: left;
    padding: 5px 20px;

    &:hover {
      background-color: $color-grey;
    }
  }
}
</style>
