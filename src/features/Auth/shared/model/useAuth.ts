import { pb } from '@/shared/api/pocketbase'

export function useAuth() {
  const checkAuth = (): boolean => {
    return pb.authStore.isValid
  }

  return {
    checkAuth,
  }
}
