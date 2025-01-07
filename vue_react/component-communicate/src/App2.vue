<script setup>
// composition API
import {
  ref, //  简单数据类型
  reactive // 复杂数据类型
} from 'vue'

//组合API
// counter 计数业务  
const counter = ref(0); // 简单数据类型
const increment = () => {
  counter.value++; // vlaue 
}

// user form 对象数据
const state = reactive({
  name: 'Alice',
  age: 25
})
const updateState = () => {
  state.name = 'Bob'
  state.age++
}

</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">Increment</button>
    <p>Name: {{ state.name }}</p>
    <p>Age: {{ state.age }}</p>
    <button @click="updateState">Update State</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>