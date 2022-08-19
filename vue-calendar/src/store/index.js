import Vue from 'vue'
import Vuex from 'vuex'
import authentication from '@/store/modules/authentication'
import userSettings from '@/store/modules/userSettings'
import localStorageKeys from '@/utils/constants/localStorageKeys'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    userSettings
  },
  state: {
    userId: localStorage.getItem(localStorageKeys.USER_ID) ?? ''
  },
  getters: {
    userId (state) {
      return state.userId
    }
  },
  actions: {

  },
  mutations: {
    setUserId (state, userId) {
      state.userId = userId
    }
  }

})
