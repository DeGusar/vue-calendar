import { uploadImage } from '@/api/imageApi'
import { getUserById } from '@/api/authApi'
import { updateUserSettings } from '@/api/userSettingsApi'
import { imageSources } from '@/utils/constants'

export default {
  namespaced: true,

  state: {
    userStatus: {
      text: 'Available',
      src: imageSources.AVAILABLE_STATUS_IMAGE_SRC
    },
    userAvatarSrc: '',
    isSaving: false,
    userData: {}
  },
  getters: {
    userStatus (state) {
      return state.userStatus
    },
    userAvatarSrc (state) {
      return state.userAvatarSrc
    },
    isSaving (state) {
      return state.isSaving
    },
    userData (state) {
      return state.userData
    }
  },

  actions: {
    async updateUserStatus ({ commit }, { userId, userStatus }) {
      try {
        await updateUserSettings(userId, { userStatus })
        commit('setUserStatus', userStatus)
      } catch (e) {
        return { result: false, message: e.message }
      }
    },
    uploadImageToCloud ({ commit }, { userId, imageFile }) {
      try {
        commit('setIsSaving', true)
        const reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.onloadend = async () => {
          const { data } = await uploadImage(JSON.stringify(reader.result))
          commit('setIsSaving', false)
          commit('setUserAvatarSrc', data.srcImage)
          await updateUserSettings(userId, { avatarSrc: data.srcImage })
        }
      } catch (e) {
        commit('setIsSaving', false)

        return { result: false, message: e.message }
      }
    },
    async updateUserData ({ commit }, userId) {
      try {
        const { userData, userStatus, avatarSrc } = await getUserById(userId)

        if (userData) {
          commit('setUserData', userData)

          if (userStatus) {
            commit('setUserStatus', userStatus)
          }

          if (avatarSrc) {
            commit('setUserAvatarSrc', avatarSrc)
          }
        } else {
          commit('setUserData', {})
        }
      } catch (e) {
        return { result: false, message: e.message }
      }
    }
  },

  mutations: {
    setUserStatus (state, userStatus) {
      state.userStatus = userStatus
    },
    setUserAvatarSrc (state, userAvatarSrc) {
      state.userAvatarSrc = userAvatarSrc
    },
    setIsSaving (state, isSaving) {
      state.isSaving = isSaving
    },
    setUserData (state, userData) {
      state.userData = userData
    }
  }

}
