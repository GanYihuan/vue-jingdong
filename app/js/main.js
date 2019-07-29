import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false // close Vue production tip

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
