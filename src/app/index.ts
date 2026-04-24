import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AppLayout from './layout/AppLayout.vue'
import router from './router'

import './styles/index.scss'

const app = createApp(AppLayout)

app.use(createPinia())
app.use(router)

app.mount('#app')
