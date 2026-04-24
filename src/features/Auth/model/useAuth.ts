import { registr } from '../api/registr'
import type { RegistrRequest } from './types'

export const useAuth = () => {
  // регистрация пользователя
  const signUp = async (form: RegistrRequest) => {
    const user = await registr(form)
    return user
  }

  return { signUp }
}
