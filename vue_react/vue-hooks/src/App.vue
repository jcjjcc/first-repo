<script setup>

import imgLazy from './components/img-lazy.vue';
import { ref } from 'vue';
const showMouse = ref(true)
const toggleMouse = () => {
    showMouse.value = !showMouse.value
}
</script>

<template>
  <div>
    <!-- <MosePos v-if="showMouse" />
    <button @click="toggleMouse">切换显示</button> -->
    <img-lazy />
  </div>

</template>

<style scoped></style>
