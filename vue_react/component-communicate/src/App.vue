<template>
    <div class="app">
        <!-- props\自定义事件+emits\子组件向父组件暴露属性或方法 -->
        <Parent />
    </div>
</template>

<script setup>
import Parent from './components/Parent.vue';
</script>

<style scoped>
.app {
    width: 500px;
    height: 500px;
}
</style>