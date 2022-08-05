import authControllers from '@/indexedDb/authControllers'
import { responseCodeHandler } from '@/utils/helpers/responseCodeHandler'

const registrateUser = async (userData) => {
  const response = await authControllers.registrateUser(userData)

  return responseCodeHandler(response)
}

const login = async (userData) => {
  const response = await authControllers.login(userData)

  return responseCodeHandler(response)
}

export {
  registrateUser,
  login
}
