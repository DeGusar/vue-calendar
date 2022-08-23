import { saveDocument, getDocument } from './index'
import { generateId } from '../utils/helpers/generateId'
import statusCodes from '@/utils/constants/statusCodes'

export const registerUser = async (userData) => {
  const userId = generateId()
  const candidate = await getDocument('users', { email: userData.email })

  if (candidate) {
    return { status: statusCodes.UNAUTHORIZED_CODE, message: 'User already exist' }
  } else {
    await saveDocument('users', { id: userId, ...userData })

    return { status: statusCodes.OK_CODE, data: { userId, firstName: userData.firstName, lastName: userData.lastName } }
  }
}

export const login = async ({ email, password }) => {
  const user = await getDocument('users', { email })

  if (!user || password !== user.userData.password) {
    return { status: statusCodes.UNAUTHORIZED_CODE, message: 'Wrong email or password' }
  }

  return { status: statusCodes.OK_CODE, data: user }
}

export const getCurrentUserData = async (userId) => {
  const user = await getDocument('users', { id: userId })

  if (user) {
    return { status: statusCodes.OK_CODE, data: user }
  }

  return { status: statusCodes.BAD_REQUEST, message: "User doesn't exist" }
}

export default {
  registerUser,
  login,
  getCurrentUserData
}
