<template>
    <div>
      ParentTwo
      <ChildTwo :msg2="msg2"/>
    </div>
  </template>
  
  <script setup>
  import ChildTwo from "./ChildTwo.vue";
  import { ref, reactive } from 'vue'
  
  const msg2 = ref("这是传给子组件的消息2")
  // const msg1 = reactive("这是传给子组件的消息1")
  </script>
  
  <style scoped>
  
  </style>