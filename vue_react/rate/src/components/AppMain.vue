<template>
    <main>
        Main content
        <h1>你的评分是{{ score }}</h1>
        <Rate :value="score"/>
        <Item />
        <Item />
    </main>
</template>

<script setup>
import Item from './Item.vue';
import { ref } from 'vue';
import Rate from './Rate.vue';
// 将数据 从父组件传递给子组件 Rate
const score = ref(3);
</script>

<style  scoped>
main {
    flex: 1;
    background-color: yellow;
}
</style>