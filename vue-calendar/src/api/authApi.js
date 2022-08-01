import authControllers from '@/indexedDb/authControllers'

const registrateUser = async (userData) => {
  const { status, message, data } = await authControllers.registrateUser(userData)

  if (status === 409) {
    throw new Error(message)
  }

  if (status === 200) {
    localStorage.setItem('userId', data.userId)
  }
}

const login = async ({ email, password }) => {
  const { status, message, data } = await authControllers.login({ email, password })

  if (status === 401) {
    throw new Error(message)
  }

  if (status === 200) {
    localStorage.setItem('userId', data.id)
  }
}

const logout = () => {
  localStorage.removeItem('userId')
}

export {
  registrateUser,
  login,
  logout
}
