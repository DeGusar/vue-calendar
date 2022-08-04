import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(Notifications)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
