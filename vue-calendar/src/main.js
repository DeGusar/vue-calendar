import reset from './reset.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  reset,
  render: (h) => h(App)
}).$mount('#app')
