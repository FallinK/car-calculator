import { createRouter, createWebHistory } from 'vue-router'
import CalculatorDisabled from '@/pages/CalculatorDisabled'
import CalculatorLoading from '@/pages/CalculatorLoading'

const routes = [
  {
    path: '/',
    name: 'disabled',
    component: CalculatorDisabled
  },
  {
    path: '/loading',
    name: 'loading',
    component: CalculatorLoading
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
