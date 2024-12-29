import './bootstrap';
import { createApp } from 'vue'
import App from './templates/App.vue'

import router from './router.js'

import { createPinia } from 'pinia'
const pinia = createPinia()

import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi'
    }
})

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')