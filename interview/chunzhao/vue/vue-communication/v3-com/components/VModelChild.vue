<template>
    <div>
        {{ value }}
        <button @click="handleClick">按钮</button>
    </div>
</template>

<script setup>
defineProps(['value'])
const emit = defineEmits(['update:value'])
const handleClick = () => {
    emit('update:value', 'hello')

}
</script>

<style  scoped>

</style>