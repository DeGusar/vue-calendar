import Vue from 'vue'
import Vuex from 'vuex'
import authentication from '@/store/modules/authentication'
import userSettings from '@/store/modules/userSettings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    userSettings
  },
  state: {

  },
  getters: {

  },
  actions: {

  },
  mutations: {

  }

})
