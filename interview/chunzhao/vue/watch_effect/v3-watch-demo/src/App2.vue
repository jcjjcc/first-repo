<template>
  <div>
  {{count}}
  </div>
</template>

<script setup >
import { ref, watch } from 'vue'
const count = ref(0);
// 参数1 依赖的响应式数据 参数2 回调函数
watch(count, (newVal, oldVal) => {
  console.log(`count changed from ${oldVal} to ${newVal}`)
},{immediate: true})

setTimeout(() => {
  count.value++;
}, 1000)
</script>

<style scoped>

</style>