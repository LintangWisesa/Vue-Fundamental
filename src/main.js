import Vue from 'vue'
import App from './App.vue'
// import Users from './16b_Nesting_Component.vue'

// Vue.component('users', Users)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
