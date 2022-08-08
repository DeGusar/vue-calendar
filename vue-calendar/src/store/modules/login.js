import { login } from '@/api/authApi'
import localStorageKeys from '@/utils/constants/localStorageKeys'

export default {
  actions: {
    setLoadingLogin ({ commit }, payload) {
      commit('setLoadingLogin', { isLoadingLogin: payload.isLoadingLogin })
    },
    async login (context, payload) {
      try {
        this.dispatch('setLoadingLogin', { isLoadingLogin: true })
        const { id: userId } = await login(payload.credentials)
        localStorage.setItem(localStorageKeys.USER_ID, userId)
        this.dispatch('updateUserId', { userId })

        return { result: true }
      } catch (e) {
        return { result: false, message: e.message }
      } finally {
        this.dispatch('setLoadingLogin', { isLoadingLogin: false })
      }
    }
  },
  mutations: {
    setLoadingLogin (state, payload) {
      state.isLoadingLogin = payload.isLoadingLogin
    }
  },
  state: {
    isLoadingLogin: false
  },
  getters: {
    isLoadingLogin (state) {
      return state.isLoadingLogin
    }
  }
}
