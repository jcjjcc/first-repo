<template>
    <div>
        PostIndex
        {{ sort }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    sort: String,
})
const {sort} = props
</script>

<style  scoped>

</style>