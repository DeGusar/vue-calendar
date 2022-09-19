import { getUsersList } from '@/api/userDataApi'
import { getUserIdFromLocalstorage } from '@/utils/helpers/getUserIdFromLocalstorage'

const usersListDataHandler = (usersList) => {
  if (Array.isArray(usersList)) {
    const ownId = getUserIdFromLocalstorage()
    const usersListWithoutOwnId = usersList.filter(usersListItem => usersListItem.id !== ownId)

    return usersListWithoutOwnId
  }

  return []
}

export default {
  namespaced: true,

  state: {
    currentDay: new Date(),
    pickedDay: new Date(),
    usersList: [],
    eventsList: [],
    rowsQuantityInCalendar: 5
  },

  getters: {
    pickedDay (state) {
      return state.pickedDay
    },

    currentDay (state) {
      return state.currentDay
    },

    usersList (state) {
      return state.usersList
    },

    eventsList (state) {
      return state.eventsList
    },
    rowsQuantityInCalendar (state) {
      return state.rowsQuantityInCalendar
    }
  },

  actions: {
    updatePickedDay ({ commit }, pickedDay) {
      commit('setPickedDay', pickedDay)
    },

    async getUsersList ({ commit }) {
      try {
        const usersListData = await getUsersList()

        if (usersListData) {
          commit('setUsersList', usersListDataHandler(usersListData))
        }
      } catch (e) {
        return { result: false, message: e.message }
      }
    },
    updateRowsQuantityInCalendar ({ commit }, rowsQuantityInCalendar) {
      commit('setRowsQuantityInCalendar', rowsQuantityInCalendar)
    }
  },

  mutations: {
    setPickedDay (state, pickedDay) {
      state.pickedDay = pickedDay
    },

    setUsersList (state, usersList) {
      state.usersList = usersList
    },

    setEventsList (state, eventsList) {
      state.eventsList = eventsList
    },

    setRowsQuantityInCalendar (state, rowsQuantityInCalendar) {
      state.rowsQuantityInCalendar = rowsQuantityInCalendar
    }
  }

}
