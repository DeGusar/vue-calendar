import { uploadImage } from '@/api/imageApi'
import { getCurrentUserData } from '@/api/authApi'
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
    isSaving (state) {
      return state.isSaving
    },
    userData (state) {
      return state.userData
    }
  },

  actions: {
    async updateUserData ({ commit }, userData) {
      try {
        await updateUserSettings(userData)
        commit('setUserData', userData)
      } catch (e) {
        return { result: false, message: e.message }
      }
    },
    uploadImageToCloud ({ commit, state }, imageFile) {
      try {
        commit('setIsSaving', true)
        const reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.onloadend = async () => {
          const { data } = await uploadImage(JSON.stringify(reader.result))
          commit('setIsSaving', false)
          commit('setUserData', { ...state.userData, userAvatarSrc: data.srcImage })
          await updateUserSettings({ userAvatarSrc: data.srcImage })
        }
      } catch (e) {
        commit('setIsSaving', false)

        return { result: false, message: e.message }
      }
    },

    async getUserData ({ commit }) {
      try {
        const userData = await getCurrentUserData()

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
    setIsSaving (state, isSaving) {
      state.isSaving = isSaving
    },
    setUserData (state, userData) {
      state.userData = userData
    }
  }

}
