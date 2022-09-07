import { updateDocumentById, getDocument, getCollection } from './index'
import { statusCodes, collections } from '@/utils/constants'

export const updateUserSetting = async (userId, userSettingsData) => {
  try {
    await updateDocumentById(collections.USERS_COLLECTION, userId, userSettingsData)

    return { status: statusCodes.OK_CODE }
  } catch (e) {
    return { status: statusCodes.CONFLICT_CODE, message: 'An error occurred during updating document' }
  }
}

export const getCurrentUserData = async (userId) => {
  const user = await getDocument(collections.USERS_COLLECTION, { id: userId })

  if (user) {
    return { status: statusCodes.OK_CODE, data: user }
  }

  return { status: statusCodes.BAD_REQUEST, message: "User doesn't exist" }
}

export const getUsersList = async () => {
  const usersList = await getCollection(collections.USERS_LIST_COLLECTION)

  if (usersList) {
    return { status: statusCodes.OK_CODE, data: usersList }
  }

  return { status: statusCodes.BAD_REQUEST, message: 'Users list is empty' }
}

export default {
  updateUserSetting,
  getCurrentUserData,
  getUsersList
}
