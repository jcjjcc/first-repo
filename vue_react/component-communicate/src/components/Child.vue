<template>
    <div class="child">
      <h3>子组件1</h3>
      <h4>我的玩具：{{ toy }}</h4>
      <button @click="getCar($parent)">拿走父亲的车</button>
    </div>
  </template>
  
  <script setup lang="ts" name="Child">
      import { ref } from "vue";
      const toy = ref("小熊猫");
      defineExpose({toy})
      function getCar(parent) {
      parent.house -=1
    }
  </script>
  <style scoped>
    .child {
        background-color: aqua;
    }
 </style>