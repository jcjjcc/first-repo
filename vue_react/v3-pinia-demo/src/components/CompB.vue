<template>
    <div>
        <h2>CompB</h2>
        <p>count:{{ counterStore.count }}</p>
        
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore();
</script>

<style scoped>

</style>