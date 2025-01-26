<template>
    <div>
        <LifeCycleComponent v-if="isShow"/>
        <button @click="isShow = !isShow">卸载</button>
    </div>
</template>

<script setup>
    import LifeCycleComponent from './components/LifeCycleComponent.vue'
    import { ref } from 'vue'
    const isShow = ref(true)
    
</script>

<style scoped>

</style>