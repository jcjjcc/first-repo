<template>
  <div>

  </div>
</template>

<script setup>
import {ref,effect} from './reactivity'
const r = ref(1)
let val
effect(()=>{
  val = r.value
})
r.value = 100
console.log(val);

// import { reactive, effect } from '@vue/reactivity'
// import { 
//   reactive, 
//   shallowReactive,
//   effect 
// } from './reactivity'

// const ret = shallowReactive({
//   num: 0,
//   age: 1,
//   num2:{
//     a:1
//   }
// })

// effect(() => {
  
//   console.log('num', ret.num)
//   // ret.num++
// })



// ret.num++

// let val
// effect(()=>{
//   val = ret.num2.a
// })

// ret.num2.a++
// console.log(val);






/**
export function effect(fn) {
  // 返回一个函数
  // 立即执行一次
  // console.log(fn, '/////');
  const effectFn = () => {
    try {
      activeEffect = effectFn
      // 执行fn 函数
      //// fn()中有读取属性的操作，会触发get，会触发track，会把当前的 activeEffect收集起来，activeEffect 就是当前的effectFn
      return fn() 
    } finally {
      console.log('依赖收集完毕，我会把activeEffect置为null');
      activeEffect = null;
    }
  }
  effectFn() // 立即执行
  return effectFn
}
 */


</script> 

<style  scoped>

</style>