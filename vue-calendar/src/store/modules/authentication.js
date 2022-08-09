import { login, registerUser } from '@/api/authApi'
import localStorageKeys from '@/utils/constants/localStorageKeys'

export default {
  namespaced: true,
  state: {
    userId: localStorage.getItem(localStorageKeys.USER_ID) ?? '',
    isLoading: false
  },
  getters: {
    userId (state) {
      return state.userId
    },
    isLoading (state) {
      return state.isLoading
    }
  },
  actions: {
    updateUserId ({ commit }, userId) {
      commit('setUserId', userId)
      localStorage.setItem(localStorageKeys.USER_ID, userId)
    },
    resetUserId ({ commit }) {
      commit('setUserId', '')
      localStorage.removeItem(localStorageKeys.USER_ID)
    },
    async register ({ commit, dispatch }, { email, password, firstName, lastName }) {
      try {
        commit('setIsLoading', true)
        const { userId } = await registerUser({ email, password, firstName, lastName })
        dispatch('updateUserId', userId)

        return { result: true, firstName, lastName }
      } catch (e) {
        return { result: false, message: e.message }
      } finally {
        commit('setIsLoading', false)
      }
    },

    async login ({ commit, dispatch }, { email, password }) {
      try {
        commit('setIsLoading', true)
        const { id: userId } = await login(email, password)
        dispatch('updateUserId', userId)

        return { result: true }
      } catch (e) {
        return { result: false, message: e.message }
      } finally {
        commit('setIsLoading', false)
      }
    },

    logout ({ commit }) {
      commit('setUserId', '')
      localStorage.removeItem(localStorageKeys.USER_ID)
    }
  },
  mutations: {
    setUserId (state, userId) {
      state.userId = userId
    },
    setIsLoading (state, isLoading) {
      state.isLoading = isLoading
    }
  }
}
