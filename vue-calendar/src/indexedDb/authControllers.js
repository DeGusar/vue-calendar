import { saveDocument, getDocument } from './index'
import { generateId } from '../utils/helpers/generateId'

export const registrateUser = async (userData) => {
  const userId = generateId()
  const candidate = await getDocument('users', { email: userData.email })

  if (candidate) {
    return { status: 409, message: 'User already exist' }
  } else {
    await saveDocument('users', { id: userId, ...userData })

    return { status: 200, data: { userId } }
  }
}

export const login = async ({ email, password }) => {
  const user = await getDocument('users', { email: email })

  if (!user || password !== user.password) {
    return { status: 401, message: 'Wrong email or password' }
  }

  return { status: 200, data: user }
}

export default {
  registrateUser,
  login
}
