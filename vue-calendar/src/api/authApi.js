import { saveDocument, getDocument } from '../indexedDb/indexedDb'
import { generateId } from '../utils/helpers/generateId'

const registrateUser = async (userData) => {
  const userId = generateId()
  const candidate = await getDocument('users', { email: userData.email })

  if (candidate) {
    throw new Error('User already exist')
  } else {
    await saveDocument('users', { id: userId, ...userData })
    localStorage.setItem('userId', userId)
  }
}

const login = async ({ email, password }) => {
  const user = await getDocument('users', { email: email })

  if (!user) {
    throw new Error('Wrong email or password')
  }

  if (password !== user.password) {
    throw new Error('Wrong email or password')
  }

  localStorage.setItem('userId', user.id)
}

const logout = () => {
  localStorage.removeItem('userId')
}

export {
  registrateUser,
  login,
  logout
}
