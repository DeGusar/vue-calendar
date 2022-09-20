import userDataControllers from '@/indexedDb/userDataControllers'
import { responseCodeHandler } from '@/utils/helpers/responseCodeHandler'
import { getUserIdFromLocalstorage } from '@/utils/helpers/getUserIdFromLocalstorage'

const updateUserSettings = async (userSettingsData) => {
  const response = await userDataControllers.updateUserSetting(getUserIdFromLocalstorage(), userSettingsData)

  return responseCodeHandler(response)
}

const getCurrentUserData = async () => {
  const response = await userDataControllers.getCurrentUserData(getUserIdFromLocalstorage())

  return responseCodeHandler(response)
}

const getUsersList = async () => {
  const response = await userDataControllers.getUsersList()

  return responseCodeHandler(response)
}

export {
  updateUserSettings,
  getCurrentUserData,
  getUsersList
}
