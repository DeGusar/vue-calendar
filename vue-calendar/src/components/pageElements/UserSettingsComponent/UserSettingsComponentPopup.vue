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
          :avatar-image-src="userData.userAvatarSrc"
          :status-image-src="userData.userStatusSrc"
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
          {{ userData.userStatusText }}
        </button>
        <UserSettingsComponentStatusPopup
          v-if="isUserStatusPopup"
          @close-popup="onClosePopup"
          @update-user-status="$emit('update-user-status', $event)"
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
      :avatar-image-src="userData.userAvatarSrc"
      :is-saving="isSaving"
      @upload-image-to-cloud="$emit('upload-image-to-cloud', $event)"
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
    userData: {
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
      this.$emit('close-popup')
    },
    onClickStatisticButton () {
      this.$router.push({ name: urlNames.STATISTIC_PAGE })
      this.$emit('close-popup')
    },
    showModal () {
      this.$modal.show('user-settings-component-modal')
    }
  }
}
</script>

<style lang="scss">
.user-settings-component-popup {
  padding: 10px 0;
  position: absolute;
  width: 320px;
  background-color: $color-white;
  color: $color-black-font;
  top: 100%;
  right: 0;
  border-radius: 4px;
  box-shadow: $box-shadow-basic;
  font-size: $font-size-base;
  z-index: 10;

  &__divider {
    height: 2px;
    margin: 10px 0;
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
      background: no-repeat center/12px $arrow-down-image-url;
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
        background-image: $status-image-url;
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
