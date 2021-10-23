import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from "axios";
import VueRouter from 'vue-router';
import Drivers from "@/components/Drivers";
import Home from "@/components/Home";
import Calendar from "@/components/Calendar";
import vueAwesomeCountdown from 'vue-awesome-countdown'
import Constructors from "@/components/Constructors";

Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default
Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/driverStandings', component: Drivers },
    { path: '/constructorStandings', component: Constructors },
    { path: '/calendar', component: Calendar }
  ]
});

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App),
}).$mount('#app')
