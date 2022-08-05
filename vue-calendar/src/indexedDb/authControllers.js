import { saveDocument, getDocument } from './index'
import { generateId } from '../utils/helpers/generateId'
import statusCodes from '@/utils/constants/statusCodes'

export const registrateUser = async (userData) => {
  const userId = generateId()
  const candidate = await getDocument('users', { email: userData.email })

  if (candidate) {
    return { status: statusCodes.UNAUTHORIZED_CODE, message: 'User already exist' }
  } else {
    await saveDocument('users', { id: userId, ...userData })

    return { status: statusCodes.OK_CODE, data: { userId } }
  }
}

export const login = async ({ email, password }) => {
  const user = await getDocument('users', { email: email })

  if (!user || password !== user.password) {
    return { status: statusCodes.UNAUTHORIZED_CODE, message: 'Wrong email or password' }
  }

  return { status: statusCodes.OK_CODE, data: user }
}

export default {
  registrateUser,
  login
}
