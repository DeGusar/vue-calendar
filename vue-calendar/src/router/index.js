import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/registration',
    component: () => import('../views/RegistrationPage.vue')
  },
  {
    path: '/statistic',
    component: () => import('../views/StatisticPage.vue')
  },
  {
    path: '/user',
    component: () => import('../views/UserPage.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
