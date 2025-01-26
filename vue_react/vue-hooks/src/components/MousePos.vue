<template>
    <div>
        <p>Mouse X: {{ x }}</p>
        <p>Mouse Y: {{ y }}</p>
        <p>sum: {{ sum }}</p>
        <button @click="add">Add</button>
    </div>
</template>

<script setup>
import useMouse from '../hooks/useMouse.js'
import useSum from '../hooks/useSum.js';
const { x, y } = useMouse();
console.log(useMouse())
const { sum, add } = useSum();
console.log(useSum())
</script>

<style scoped>
</style>