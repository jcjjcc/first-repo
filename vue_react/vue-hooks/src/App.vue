<script setup>
import MosePos from './components/MousePos.vue';
import { ref } from 'vue';
const showMouse = ref(true)
const toggleMouse = () => {
    showMouse.value = !showMouse.value
}
</script>

<template>
  <div>
    <MosePos v-if="showMouse" />
    <button @click="toggleMouse">切换显示</button>
  </div>

</template>

<style scoped></style>
