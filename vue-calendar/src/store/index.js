import Vue from 'vue'
import Vuex from 'vuex'
import authentication from '@/store/modules/authentication'
import userSettings from '@/store/modules/userSettings'
import mainPageModule from '@/views/MainPage/mainPageModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    userSettings,
    mainPageModule
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
