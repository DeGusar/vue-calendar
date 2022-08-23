import authControllers from '@/indexedDb/userSettingsControllers'
import { responseCodeHandler } from '@/utils/helpers/responseCodeHandler'
import { getUserIdFromLocalstorage } from '@/utils/helpers/getUserIdFromLocalstorage'

const updateUserSettings = async (userSettingsData) => {
  const response = await authControllers.updateUserSetting(getUserIdFromLocalstorage(), userSettingsData)

  return responseCodeHandler(response)
}

export {
  updateUserSettings
}
