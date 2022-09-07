import { login, registerUser } from '@/api/authApi'
import { localStorageKeys } from '@/utils/constants'

export default {
  namespaced: true,
  state: {
    isLoading: false
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    }

  },
  actions: {
    async register ({ commit }, credentials) {
      try {
        commit('setIsLoading', true)
        const { userId } = await registerUser(credentials)
        localStorage.setItem(localStorageKeys.USER_ID, userId)

        return { result: true, firstName: credentials.firstName, lastName: credentials.lastName }
      } catch (e) {
        return { result: false, message: e.message }
      } finally {
        commit('setIsLoading', false)
      }
    },

    async login ({ commit }, { email, password }) {
      try {
        commit('setIsLoading', true)
        const { id: userId } = await login({ email, password })
        localStorage.setItem(localStorageKeys.USER_ID, userId)

        return { result: true }
      } catch (e) {
        return { result: false, message: e.message }
      } finally {
        commit('setIsLoading', false)
      }
    },

    logout ({ commit }) {
      localStorage.removeItem(localStorageKeys.USER_ID)
    }
  },
  mutations: {
    setIsLoading (state, isLoading) {
      state.isLoading = isLoading
    }
  }
}
