import Vue from 'vue'
import 'normalize-styl'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
