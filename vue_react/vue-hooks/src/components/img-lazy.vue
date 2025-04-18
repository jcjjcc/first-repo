<template>
   <h4>vue3优雅实现图片懒加载</h4>
<div v-for="(_,idx) in new Array(10).fill(11)"
     style="width: 200px; height:200px;"
>
<img ref="imgRef" style="height:100%" 
src="https://th.bing.com/th/id/OIP.NcpXiQVgHBRPAI4O5-e_eAHaFU?w=251&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
:data-src=" `https://picsum.photos/200/${180 + idx}`">
</div>
</template>

<script setup>
import {ref , onMounted} from "vue";
import {useInView} from "../hooks/useImg";
const imgRef = ref(null);
useInView(imgRef);


</script>

<style scoped>
</style>