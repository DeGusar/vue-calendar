import Vue from 'vue'
import Vuex from 'vuex'
import login from '@/store/modules/login'
import registration from '@/store/modules/registration'
import localStorageKeys from '@/utils/constants/localStorageKeys'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    updateUserId ({ commit }, payload) {
      commit('updateUserId', { userId: payload.userId })
    },
    resetUserId ({ commit }) {
      commit('updateUserId', { userId: '' })
      localStorage.removeItem(localStorageKeys.USER_ID)
    }
  },
  mutations: {
    updateUserId (state, payload) {
      state.userId = payload.userId
    }
  },
  state: {
    userId: localStorage.getItem(localStorageKeys.USER_ID) ?? ''
  },
  getters: {
    userId (state) {
      return state.userId
    }
  },
  modules: {
    login,
    registration
  }
})
