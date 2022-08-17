import { updateDocumentById } from './index'
import statusCodes from '@/utils/constants/statusCodes'

export const updateUserSetting = async (userId, userSettingsData) => {
  try {
    await updateDocumentById('users', userId, userSettingsData)

    return { status: statusCodes.OK_CODE }
  } catch (e) {
    return { status: statusCodes.CONFLICT_CODE, message: 'An error occurred during updating document' }
  }
}

export default {
  updateUserSetting
}
