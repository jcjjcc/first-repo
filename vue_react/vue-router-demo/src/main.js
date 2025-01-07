import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // router 是一个配置好的路由对象

const app = createApp(App) // vue 根组件 
//app 对象 use 方法
console.log(app)
console.log(router)
// vue的周边生态就起来了
app.use(router)//   插件路由 ->需要在挂载之前注册路由
.mount('#app') //->挂载点
 
