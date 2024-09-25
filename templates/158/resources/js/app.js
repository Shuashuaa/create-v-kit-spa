require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from './router'
import store from './store'
import App from './template/App';
Vue.use(Vuetify)

const app = new Vue({
    el: '#app',
    store,
    router:Router,
    vuetify: new Vuetify(),
    render: h=>h(App)
});