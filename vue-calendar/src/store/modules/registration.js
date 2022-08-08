import { registrateUser } from '@/api/authApi'

export default {
  actions: {
    setLoadingRegistration ({ commit }, payload) {
      commit('setLoadingRegistration', { isLoadingRegistration: payload.isLoadingRegistration })
    },
    async registrate (context, payload) {
      try {
        this.dispatch('setLoadingRegistration', { isLoadingRegistration: true })
        const { userId, firstName, lastName } = await registrateUser(payload.registrationData)
        this.dispatch('updateUserId', { userId })

        return { result: true, firstName, lastName }
      } catch (e) {
        return { result: false, message: e.message }
      } finally {
        this.dispatch('setLoadingRegistration', { isLoadingRegistration: false })
      }
    }
  },
  mutations: {
    setLoadingRegistration (state, payload) {
      state.isLoadingRegistration = payload.isLoadingRegistration
    }
  },
  state: {
    isLoadingRegistration: false
  },
  getters: {
    isLoadingRegistration (state) {
      return state.isLoadingRegistration
    }
  }
}
