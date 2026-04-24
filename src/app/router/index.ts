import { createRouter, createWebHistory } from 'vue-router'
import { RegistrPage } from '@/pages/registr'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RegistrPage,
    },
  ],
})

export default router
