import Vue from 'vue'
import VueRouter from 'vue-router'
import Drivers from "@/views/Drivers";
import Constructors from "@/views/Constructors";
import Calendar from "@/views/Calendar";
import Results from "@/views/Results";
import News from "@/views/News";
import Seasons from "@/views/Seasons";
import Home from "@/views/Home";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/driverStandings', component: Drivers },
    { path: '/constructorStandings', component: Constructors },
    { path: '/calendar', component: Calendar },
    { path: '/calendar/results/:id', component: Results, name : 'results' },
    { path: '/news', component: News, name : 'news' },
    { path: '/seasons', component: Seasons, name : 'seasons' }
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
