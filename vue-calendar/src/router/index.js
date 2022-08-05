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

const availableRoutesWithoutAuthorization = [
  urlNames.LOGIN_PAGE,
  urlNames.REGISTRATION_PAGE,
  urlNames.ERROR_404_PAGE
]

router.beforeEach((to, from, next) => {
  if (availableRoutesWithoutAuthorization.includes(to.name) || localStorage.getItem('userId')) {
    next()
  } else next({ name: urlNames.LOGIN_PAGE })
})

export default router
