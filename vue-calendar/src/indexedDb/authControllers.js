import { saveDocument, getDocument } from './index'
import { generateId } from '../utils/helpers/generateId'
import { collections, statusCodes } from '@/utils/constants'

export const registerUser = async (userData) => {
  const userId = generateId()
  const candidate = await getDocument(collections.USERS_COLLECTION, { email: userData.email })

  if (candidate) {
    return { status: statusCodes.UNAUTHORIZED_CODE, message: 'User already exist' }
  } else {
    await saveDocument(collections.USERS_COLLECTION, { id: userId, ...userData })
    await saveDocument(collections.USERS_LIST_COLLECTION, { id: userId, ...userData })

    return { status: statusCodes.OK_CODE, data: { userId, firstName: userData.firstName, lastName: userData.lastName } }
  }
}

export const login = async ({ email, password }) => {
  const user = await getDocument(collections.USERS_COLLECTION, { email })

  if (!user || password !== user.password) {
    return { status: statusCodes.UNAUTHORIZED_CODE, message: 'Wrong email or password' }
  }

  return { status: statusCodes.OK_CODE, data: user }
}

export default {
  registerUser,
  login
}
