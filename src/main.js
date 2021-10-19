import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  vuetify,
  axios,
  render: h => h(App),
}).$mount('#app')
