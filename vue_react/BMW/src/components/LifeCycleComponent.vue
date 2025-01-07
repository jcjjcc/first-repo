<template>
    <div>
        <p id="count">LifrCycleComponent: {{ count }}</p>
    </div>
</template>

<script setup>
import { defineProps, onBeforeMount, onMounted , onUnmounted, onBeforeUnmount, onUpdated ,onBeforeUpdate} from 'vue';
defineProps({
    count: {
        type: Number,
        required: true
    }
})

// console.log('haha')
onBeforeMount(() => {
    console.log(document.getElementById('count'),'-------')
    console.log('onBeforeMount')
})
//组件有生老病死
onMounted(() => {
    //on 某个阶段
    //mounted  挂载
    // 已经完成了挂载
    console.log('onMounted')
})

onUnmounted(() => {
    console.log('onUnmounted')
})

onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
})

onUpdated(() => {
    console.log('onUpdated')
})

onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
})



</script>

<style scoped></style>