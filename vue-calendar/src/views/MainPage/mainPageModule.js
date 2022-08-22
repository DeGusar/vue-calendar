
export default {
  namespaced: true,

  state: {
    currentDay: new Date(),
    pickedDay: new Date()
  },

  getters: {
    pickedDay (state) {
      return state.pickedDay
    },

    currentDay (state) {
      return state.currentDay
    }

  },

  actions: {
    updatePickedDay ({ commit }, pickedDay) {
      commit('setPickedDay', pickedDay)
    }
  },

  mutations: {
    setPickedDay (state, pickedDay) {
      state.pickedDay = pickedDay
    }
  }

}
