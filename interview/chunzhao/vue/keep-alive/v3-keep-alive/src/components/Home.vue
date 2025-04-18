<template>
    <div>
      Home
      <input type="text" v-model="message" placeholder="输入一些内容" />
      <p>你输入的内容是：{{message}}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const message = ref('');
  </script>
  
  <style  scoped>
  
  </style>