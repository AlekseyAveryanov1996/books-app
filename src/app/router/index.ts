import { createRouter, createWebHistory } from 'vue-router'
import { RegistrPage } from '@/pages/registr'
import { AuthPage } from '@/pages/authPage'
import { DashBoard } from '@/pages/dashboard'
import { useAuth } from '@/features/Auth/shared/model/useAuth'

const useAuthStore = useAuth()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AuthPage,
      meta: { requiresAuth: false }, // указываем, что страница публичная
    },
    {
      path: '/dashboard/',
      component: DashBoard,
      meta: { requiresAuth: true }, // закрытая страница
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = useAuthStore.checkAuth()

  console.log(isAuthenticated)

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/')
  } else if (to.path === '/' && isAuthenticated) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
