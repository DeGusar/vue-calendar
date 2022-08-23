import localStorageKeys from '../constants/localStorageKeys'

export const getUserIdFromLocalstorage = () => {
  return localStorage.getItem(localStorageKeys.USER_ID) ?? ''
}
