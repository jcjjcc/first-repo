import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'

const app = createApp(App)
app
.use(i18n) //vue框架和生态接口   install 方法 
.mount('#app')
