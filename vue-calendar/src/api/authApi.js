import authControllers from '@/indexedDb/authControllers'
import { responseCodeHandler } from '@/utils/helpers/responseCodeHandler'

const registerUser = async (userData) => {
  const response = await authControllers.registerUser(userData)

  return responseCodeHandler(response)
}

const login = async (userData) => {
  const response = await authControllers.login(userData)

  return responseCodeHandler(response)
}

export {
  registerUser,
  login
}
