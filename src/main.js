import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from "axios";
import router from './router'
import vueAwesomeCountdown from 'vue-awesome-countdown'
import timeline from "vue-tweet-embed/src/timeline";

Vue.use(timeline)
Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App),
}).$mount('#app')
