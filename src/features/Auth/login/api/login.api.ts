import { pb } from '@/shared/api/pocketbase'
import type { RequestLogIn } from '../model/types'

export async function logIn(data: RequestLogIn) {
  try {
    const authData = await pb.collection('users').authWithPassword(data.identity, data.password)
    console.log(authData)
    console.log(pb.authStore.token)
  } catch (error) {
    console.log('Ошибка авторизации', error)
    throw new Error('Ошибка авторизации')
  }
}
