// vue源码学习 深入学习
// vue可以在后端运行
// vue也是模块化写出来的，reactivity模块
const {
    effect, 
    reactive // vue响应式
} = require('@vue/reactivity')

// 不用挂载页面上 用node来运行

let dummy
//什么是响应式
const counter = reactive({
   num1:1,
   num2:2 
})

// effect是个函数
// 接收一个函数参数
// 自动更新 可以是一个函数  {{}} computed ....

// effect中的这个函数依赖于counter.num1和counter.num2
effect(()=>{
    // proxy get 
    dummy = counter.num1 + counter.num2
    console.log(dummy)
})

// num1变化了 就会自动更新effect中的函数，因为这个函数依赖于counter.num1
setInterval(()=>{
    counter.num1++
},1000)

setInterval(()=>{
    counter.num2++
},500)