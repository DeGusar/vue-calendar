import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'
import { urlNames } from '@/utils/constants/urlNames'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: urlNames.MAIN_PAGE,
    component: MainPage
  },
  {
    path: '/login',
    name: urlNames.LOGIN_PAGE,
    component: () => import('@/views/LoginPage')
  },
  {
    path: '/registration',
    name: urlNames.REGISTRATION_PAGE,
    component: () => import('@/views/RegistrationPage')
  },
  {
    path: '/statistic',
    name: urlNames.STATISTIC_PAGE,
    component: () => import('@/views/StatisticPage')
  },
  {
    path: '/user',
    name: urlNames.USER_PAGE,
    component: () => import('@/views/UserPage')
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
