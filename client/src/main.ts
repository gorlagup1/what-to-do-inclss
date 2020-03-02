import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma';
import '@fontawesomsr/customer-Frok/all,css' 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
