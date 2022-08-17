<template>
  <div>
    <div
      class="user-settings-component"
      @click.stop="onClickAvatar"
    >
      <AvatarComponent
        class="user-settings-component__avatar"
        :user-full-name="userFullName"
        :avatar-image-src="userAvatarSrc"
        :status-image-src="userStatus.src"
      />
    </div>
    <UserSettingsComponentPopup
      v-if="isPopup"
      v-click-outside="onClickAvatar"
      :user-full-name="userFullName"
      :avatar-image-src="userAvatarSrc"
      :user-data="userData"
      :user-status="userStatus"
      :is-saving="isSaving"
      @logout="onLogout"
      @closePopup="onClickAvatar"
      @uploadImageToCloud="onUploadImageToCloud"
      @updateUserStatus="onUpdateUserStatus"
    />
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapActions, mapGetters } from 'vuex'
import { AvatarComponent } from '../../basicComponents'
import UserSettingsComponentPopup from './UserSettingsComponentPopup'
import { urlNames } from '@/utils/constants'

export default {
  name: 'UserSettingsComponent',
  components: { AvatarComponent, UserSettingsComponentPopup },

  directives: {
    ClickOutside
  },

  data: () => ({
    isPopup: false
  }),

  computed: {
    ...mapGetters('userSettings', ['userStatus', 'userAvatarSrc', 'userData', 'isSaving']),
    ...mapGetters('authentication', ['userId']),

    userFullName () {
      return `${this.userData.firstName} ${this.userData.lastName}`
    }
  },

  methods: {
    ...mapActions('authentication', ['logout']),
    ...mapActions('userSettings', ['updateUserStatus', 'uploadImageToCloud']),
    onClickAvatar () {
      this.isPopup = !this.isPopup
    },
    onLogout () {
      this.logout()

      this.$notify({
        group: 'auth',
        type: 'success',
        text: 'Successfully logout'
      })
      this.$router.push({ name: urlNames.LOGIN_PAGE })
    },
    onUpdateUserStatus (event) {
      this.updateUserStatus({ userId: this.userId, userStatus: event })
    },
    async onUploadImageToCloud (event) {
      await this.uploadImageToCloud({ userId: this.userId, imageFile: event })
    }
  }

}
</script>

<style lang="scss">
  .user-settings-component {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      background-color: $color-purple-light;
    }

    &__avatar {
      width: 32px;
      height: 32px;
    }
  }

</style>
