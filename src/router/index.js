import { createRouter, createWebHashHistory } from 'vue-router'
import Shop from '@/views/shop'
import Inquiry from '@/views/inquiry'
import Healthy from '@/views/healthy'
import Search from '@/views/search'
const routes = [
  {
    path: '/',
    redirect: '/shop'
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/inquiry',
    component: Inquiry
  },
  {
    path: '/healthy',
    component: Healthy
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
