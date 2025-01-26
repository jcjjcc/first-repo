<template>

    <div>
        <p>Mouse X: {{ mousePos.x }}</p>
        <p>Mouse Y: {{ mousePos.y }}</p>
        <p>sum: {{ sum }}</p>
        <button @click="add">Add</button>
    </div>

</template>

<script setup>
import {
    // composition api    vue3核心亮点
    ref,
    reactive,
    onMounted,  //生命周期  life cycle   
    onUnmounted    
} from 'vue';
// const x = ref(0)
// const y = ref(0)
let sum = ref(0)
const mousePos = reactive({
    x: 0,
    y: 0
})

const handler =(e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
        console.log(mousePos.x, mousePos.y)
        console.log('我还在')
    }

onMounted(() => {
    window.addEventListener('mousemove', handler)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handler)
})

function add() {
    sum.value += 1
}

</script>

<style scoped></style>