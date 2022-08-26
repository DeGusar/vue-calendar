import authControllers from '@/indexedDb/userSettingsControllers'
import { responseCodeHandler } from '@/utils/helpers/responseCodeHandler'

const updateUserSettings = async (userId, userSettingsData) => {
  const response = await authControllers.updateUserSetting(userId, userSettingsData)

  return responseCodeHandler(response)
}

export {
  updateUserSettings
}
