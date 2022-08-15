import { uploadImage } from '@/api/imageApi'
import { getUserById } from '@/api/authApi'

export default {
  namespaced: true,

  state: {
    userStatus: {
      text: 'Available',
      src: 'https://res.cloudinary.com/rss-collection/image/upload/v1660259573/calendar/active_cgujh6.svg'
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
    updateUserStatus ({ commit }, userStatus) {
      commit('setUserStatus', userStatus)
    },
    uploadImageToCloud ({ commit }, imageFile) {
      try {
        commit('setIsSaving', true)
        const reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.onloadend = async () => {
          const { data } = await uploadImage(JSON.stringify(reader.result))
          commit('setIsSaving', false)
          commit('setUserAvatarSrc', data.srcImage)
        }
      } catch (e) {
        commit('setIsSaving', false)

        return { result: false, message: e.message }
      }
    },
    async updateUserData ({ commit }, userId) {
      try {
        const userData = await getUserById(userId)

        if (userData) {
          commit('setUserData', userData)
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
