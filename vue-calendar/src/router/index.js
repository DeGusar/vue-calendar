import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'
import { urlNames, layoutNames } from '@/utils/constants'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: urlNames.MAIN_PAGE,
    component: MainPage,
    meta: {
      layout: layoutNames.MAIN_LAYOUT
    }
  },
  {
    path: '/login',
    name: urlNames.LOGIN_PAGE,
    component: () => import('@/views/LoginPage'),
    meta: {
      layout: layoutNames.AUTH_LAYOUT
    }
  },
  {
    path: '/registration',
    name: urlNames.REGISTRATION_PAGE,
    component: () => import('@/views/RegistrationPage'),
    meta: {
      layout: layoutNames.AUTH_LAYOUT
    }
  },
  {
    path: '/statistic',
    name: urlNames.STATISTIC_PAGE,
    component: () => import('@/views/StatisticPage'),
    meta: {
      layout: layoutNames.MAIN_LAYOUT
    }
  },
  {
    path: '/user',
    name: urlNames.USER_PAGE,
    component: () => import('@/views/UserPage'),
    meta: {
      layout: layoutNames.MAIN_LAYOUT
    }
  },
  {
    path: '*',
    name: urlNames.ERROR_404_PAGE,
    component: () => import('@/views/Error404Page'),
    meta: {
      layout: layoutNames.ERROR_LAYOUT
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
