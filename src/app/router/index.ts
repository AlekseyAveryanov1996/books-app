import { createRouter, createWebHistory } from 'vue-router'
import { RegistrPage } from '@/pages/registr'
import { AuthPage } from '@/pages/authPage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AuthPage,
    },
  ],
})

export default router
