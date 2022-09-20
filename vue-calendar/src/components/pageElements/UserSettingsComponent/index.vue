<template>
  <div>
    <div
      class="user-settings-component"
      @click.stop="onClickAvatar"
    >
      <AvatarComponent
        :user-full-name="userFullName"
        :avatar-image-src="userData.userAvatarSrc"
        :status-image-src="userData.userStatusSrc"
        class="user-settings-component__avatar"
      />
    </div>
    <UserSettingsComponentPopup
      v-if="isPopup"
      v-click-outside="onClickAvatar"
      :user-full-name="userFullName"
      :user-data="userData"
      :is-saving="isSaving"
      @logout="onLogout"
      @close-popup="onClickAvatar"
      @upload-image-to-cloud="onUploadImageToCloud"
      @update-user-status="onUpdateUserStatus"
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
    ...mapGetters('userSettings', ['userData', 'isSaving']),

    userFullName () {
      return `${this.userData.firstName} ${this.userData.lastName}`
    }
  },

  methods: {
    ...mapActions('authentication', ['logout']),
    ...mapActions('userSettings', {
      onUploadImageToCloud: 'uploadImageToCloud',
      updateUserData: 'updateUserData'
    }),
    onUpdateUserStatus ({ text, src }) {
      this.updateUserData({ ...this.userData, userStatusText: text, userStatusSrc: src })
    },

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
