<template>
  <div class="father" >
    <h3>父组件</h3>
    <h4>我的房产：{{ house }}</h4>
    <Child ref="c1"/>
    <button @click="sentToy">替换c1玩具</button>
    <Child1 ref="c2" />
    <button @click="sentToy1">替换c2玩具</button>
    <button @click="NoToy($refs)">全部没收</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue';
import Child1 from './Child1.vue';
let c1 = ref(null);
let house = ref(4)
function sentToy() {
  c1.value.toy = '玩具2';
}
let c2 = ref(null);
function sentToy1() {
  c2.value.toy = '玩具1';
}
function NoToy(refs) {
  for (let key in refs) {
    refs[key].toy = "被没收";
  }
}

defineExpose({ house})
</script>

<style scoped>
.father {
  background-color:cadetblue;
  border: 1px solid #ccc; 
  padding: 10px; 
  margin-bottom: 20px;
}
</style>
