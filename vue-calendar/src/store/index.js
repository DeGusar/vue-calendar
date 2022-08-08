import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import registration from './modules/registration'
import localStorageKeys from '@/utils/constants/localStorageKeys'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    updateUserId ({ commit }, payload) {
      commit('updateUserId', { userId: payload.userId })
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
