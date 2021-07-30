import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/dashboard.vue')
  },
  {
    path: '/hello-world',
    name: 'Hello World',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/three',
    name: 'Three',
    component: () => import('@/components/nav-root.vue')
  },
  {
    path: '/three/block',
    name: 'Block',
    component: () => import('@/pages/three/block.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
