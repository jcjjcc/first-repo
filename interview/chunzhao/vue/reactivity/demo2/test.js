

// let obj = {b:1}
// const map = new Map() //键值对
// map.set('a',2)
// map.set(obj,3)  

// delete obj; //手动删除obj 触发垃圾回收机制
// console.log(map.get(obj))



// //weakmap 弱引用 不会影响垃圾回收机制


const {
    effect,
    reactive // vue响应式
} = require('@vue/reactivity')

let dummy

const counter = reactive({
    num1: 1,
    num2: 2
})

console.log('start')
effect(() => {
    console.log(counter.num1)
   
})
counter.num1++
console.log('end')