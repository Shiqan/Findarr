import Vue from 'vue'
import App from './App'
import apollo from './apollo-client'

import router from './router'

Vue.config.productionTip = false
Vue.prototype.$apollo = apollo

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')