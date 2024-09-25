import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from './components/Home'
import About from './components/About'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ],
});
