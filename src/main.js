import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from "axios";
import VueRouter from 'vue-router';
import Drivers from "@/pages/Drivers";
import Home from "@/pages/Home";
import Calendar from "@/components/Calendar";
import vueAwesomeCountdown from 'vue-awesome-countdown'
import Constructors from "@/pages/Constructors";
import Results from "@/components/Results";
import timeline from "vue-tweet-embed/src/timeline";
import News from "@/pages/News";

Vue.use(timeline)
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
    { path: '/calendar', component: Calendar },
    { path: '/calendar/results/:id', component: Results, name : 'results' },
    { path: '/news', component: News, name : 'news' }
  ]
});

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App),
}).$mount('#app')
