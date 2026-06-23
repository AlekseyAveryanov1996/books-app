import { pb } from '@/shared/api/pocketbase'

export function useAuth() {
  const checkAuth = (): boolean => {
    return pb.authStore.isValid
  }
  const getIdUserAuth = (): string | undefined => {
    return pb.authStore.model?.id
  }

  return {
    checkAuth,
    getIdUserAuth,
  }
}
