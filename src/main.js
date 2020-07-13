import Vue from 'vue'
import App from './App.vue'
import  router from './components/router'

import vuetify from "./plugins/vuetify";
import store from './store'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router,
  vuetify,
}).$mount('#app')
