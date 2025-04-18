import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import './assets/tailwind.css'
import rouer from './router/index.ts'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(rouer)
app.mount('#app')
