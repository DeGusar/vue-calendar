import authControllers from '@/indexedDb/authControllers'
import { responseCodeHandler } from '@/utils/helpers/responseCodeHandler'

const registrateUser = async (userData) => {
  const { status, message, data } = await authControllers.registrateUser(userData)

  return responseCodeHandler(status, message, data)
}

const login = async ({ email, password }) => {
  const { status, message, data } = await authControllers.login({ email, password })

  return responseCodeHandler(status, message, data)
}

export {
  registrateUser,
  login
}
