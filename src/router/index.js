import { createRouter, createWebHashHistory } from 'vue-router'
import Recommand from '@/views/recommand'
import Singer from '@/views/singer'
import TopList from "@/views/top-list"
import Search from "@/views/search"
const routes = [
  {
    path: '/recommand',
    component: Recommand
  },
  {
    path:'/singer',
    component:Singer
  },
  {
    path:'/top-list',
    component:TopList
  },
  {
    path:'/search',
    component:Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
