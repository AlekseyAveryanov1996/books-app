import type { RegistrRequest } from '../model/types'
import { pb } from '@/shared/api/pocketbase'

export async function registr(data: RegistrRequest) {
  try {
    const user = await pb.collection('users').create({
      email: data.email,
      password: data.password,
      username: data.username,
      passwordConfirm: data.passwordConfirm,
    })

    return user
  } catch (error) {
    console.log('Register error:', error)
    throw error
  }
}
