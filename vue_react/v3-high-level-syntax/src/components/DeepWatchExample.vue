<template>
    <div>
      <p>姓名: {{ user.name }}</p>
      <input v-model="user.name" placeholder="输入姓名" />
      <p>年龄: {{ user.age }}</p>
      <input type="number" v-model="user.age" placeholder="输入年龄" />
      <button @click="change">点击</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, watchEffect,reactive } from 'vue';
  
  // 定义一个嵌套的对象作为响应式数据
  const user = ref({
    name: '张三',
    age: 25,
  });
  const user2 = reactive({
    name: '李四',
    age: 25,
  })
  function change() {
    user.value = {
      name: '李四',
      age: 30,
    }
  }
  // 使用 watch 监听 user 对象的变化，并设置 deep 为 true
  watch(user.age, (newVal, oldVal) => {
    console.log('user 发生了变化');
    console.log('新值:', newVal);
    console.log('旧值:', oldVal);
  },{deep:true});

//默认执行一次
// watchEffect(()=>{
//     // Object.prototype.toString()
//      console.log(`user 发生了变化${JSON.stringify(user)}`);
// })
  </script>