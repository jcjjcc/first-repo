<!-- <template>
    <div>
        <h2>CompA</h2>
        <p>count:{{ counterStore.count }}</p>
        <button @click="counterStore.increment">Add</button>
        <button @click="add">add</button>
        <CompSubA />
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter';
import CompSubA from './CompSubA.vue';
const counterStore = useCounterStore();
console.log(counterStore);
function add() {
    // counterStore.count ++
    counterStore.$patch({ count: counterStore.count + 1 });
}
// const { count, increment } = counterStore;
</script>

<style scoped>

</style> -->


<template>
    <div>
        <h2>CompA</h2>
        <p>count:{{ count }}</p>
        <p>doubleCount:{{ doubleCount }}</p>
        <button @click="counterStore.increment">Add</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter';
import { storeToRefs } from 'pinia';
import {toRefs} from 'vue';
const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
console.log(storeToRefs(counterStore))
console.log(toRefs(counterStore))

</script>

<style scoped>

</style>