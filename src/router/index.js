import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home.vue')
  },
  {
    path: '/ana',
    name: 'ana',
    component: () => import('../views/layout/tow/index.vue')
  },
  {
    path: '/ems',
    name: 'ems',
    component: () => import('../views/ems.vue')
  },
  {
    path: '/pcs',
    name: 'pcs',
    component: () => import('../views/pcs.vue')
  },
  {
    path: '*',
    name: '/404',
    component: () => import('../views/error/404.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next()
  //获取token
  let tokenStr = JSON.parse(localStorage.getItem('token'))
  if (!tokenStr) return next('/login')
  next()
})

export default router
