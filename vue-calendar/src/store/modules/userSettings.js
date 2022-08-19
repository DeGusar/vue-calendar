import { uploadImage } from '@/api/imageApi'
import { getUserById } from '@/api/authApi'
import { updateUserSettings } from '@/api/userSettingsApi'
import { imageSources } from '@/utils/constants'

const userDataHandler = ({ firstName, lastName, email, userStatusText, userStatusSrc, userAvatarSrc }) => {
  return (
    {
      firstName,
      lastName,
      email,
      userStatusText: userStatusText ?? 'Available',
      userStatusSrc: userStatusSrc ?? imageSources.AVAILABLE_STATUS_IMAGE_SRC,
      userAvatarSrc: userAvatarSrc ?? ''
    })
}

export default {
  namespaced: true,

  state: {
    isSaving: false,
    userData: {
      firstName: '',
      lastName: '',
      email: '',
      userStatusText: 'Available',
      userStatusSrc: imageSources.AVAILABLE_STATUS_IMAGE_SRC,
      userAvatarSrc: ''
    }
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
    async updateUserStatus ({ commit, rootGetters }, { text, src }) {
      try {
        await updateUserSettings(rootGetters.userId, { userStatusText: text, userStatusSrc: src })
        commit('setUserStatus', { text, src })
      } catch (e) {
        return { result: false, message: e.message }
      }
    },
    uploadImageToCloud ({ commit, rootGetters }, imageFile) {
      try {
        commit('setIsSaving', true)
        const reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.onloadend = async () => {
          const { data } = await uploadImage(JSON.stringify(reader.result))
          commit('setIsSaving', false)
          commit('setUserAvatarSrc', data.srcImage)
          await updateUserSettings(rootGetters.userId, { userAvatarSrc: data.srcImage })
        }
      } catch (e) {
        commit('setIsSaving', false)

        return { result: false, message: e.message }
      }
    },
    async updateUserData ({ commit, rootGetters }) {
      try {
        const userData = await getUserById(rootGetters.userId)

        if (userData) {
          commit('setUserData', userDataHandler(userData))
        } else {
          commit('setUserData', {})
        }
      } catch (e) {
        return { result: false, message: e.message }
      }
    }
  },

  mutations: {
    setUserStatus (state, { text, src }) {
      state.userData.userStatusText = text
      state.userData.userStatusSrc = src
    },
    setUserAvatarSrc (state, userAvatarSrc) {
      state.userData.userAvatarSrc = userAvatarSrc
    },
    setIsSaving (state, isSaving) {
      state.isSaving = isSaving
    },
    setUserData (state, userData) {
      state.userData = userData
    }
  }

}
