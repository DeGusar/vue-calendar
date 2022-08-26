import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'
import VModal from 'vue-js-modal'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VCalendar from 'v-calendar'

Vue.config.productionTip = false

Vue.use(Notifications)
Vue.use(Vuelidate)
Vue.use(VModal)
Vue.use(VueAxios, axios)
Vue.use(VCalendar, {
  componentPrefix: 'vc'
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
