<template>
    <div>
        <input type="text" :value="modelValue"
         @input="emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script setup>
let props = defineProps(['modelValue'])
let emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
input {
    border: 2px solid red;
    padding: 5px;
}
</style>