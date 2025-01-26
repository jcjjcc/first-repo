<template>
    <div>
        <h2>CompSubA</h2>
        {{ counterStore.count }}
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore();
</script>

<style scoped>

</style>