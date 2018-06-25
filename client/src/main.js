import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App'
import apollo from './apollo-client'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$apollo = apollo

Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')