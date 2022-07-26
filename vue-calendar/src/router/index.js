import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'
import { urlNames } from '@/utils/constants'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: urlNames.MAIN_PAGE,
    component: MainPage,
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '/login',
    name: urlNames.LOGIN_PAGE,
    component: () => import('@/views/LoginPage'),
    meta: {
      layout: 'AuthLayout'
    }
  },
  {
    path: '/registration',
    name: urlNames.REGISTRATION_PAGE,
    component: () => import('@/views/RegistrationPage'),
    meta: {
      layout: 'AuthLayout'
    }
  },
  {
    path: '/statistic',
    name: urlNames.STATISTIC_PAGE,
    component: () => import('@/views/StatisticPage'),
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '/user',
    name: urlNames.USER_PAGE,
    component: () => import('@/views/UserPage'),
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '*',
    name: urlNames.ERROR_404_PAGE,
    component: () => import('@/views/Error404Page'),
    meta: {
      layout: 'ErrorLayout'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
