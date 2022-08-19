import authControllers from '@/indexedDb/authControllers'
import { responseCodeHandler } from '@/utils/helpers/responseCodeHandler'
import { getUserIdFromLocalstorage } from '@/utils/helpers/getUserIdFromLocalstorage'

const registerUser = async (userData) => {
  const response = await authControllers.registerUser(userData)

  return responseCodeHandler(response)
}

const login = async (userData) => {
  const response = await authControllers.login(userData)

  return responseCodeHandler(response)
}

const getUserById = async () => {
  const response = await authControllers.getUserById(getUserIdFromLocalstorage())

  return responseCodeHandler(response)
}

export {
  registerUser,
  login,
  getUserById
}
