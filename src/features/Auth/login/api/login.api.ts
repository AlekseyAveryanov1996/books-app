import { pb } from '@/shared/api/pocketbase'
import type { RequestLogIn } from '../model/types'

export async function logIn(data: RequestLogIn) {
  try {
    const authData = await pb.collection('users').authWithPassword(data.identity, data.password)
    return authData
  } catch (error) {
    console.error('Ошибка авторизации', error)
    throw error
  }
}
