import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
//状态管理库
//pinia 的实例 vue 全家桶中的Store
const pinia = createPinia()
const app = createApp(App)
app
.use(pinia)
.mount('#app')
