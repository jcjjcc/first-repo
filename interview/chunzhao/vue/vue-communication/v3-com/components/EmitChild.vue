<template>
    <div>
        <button @click="handleClick">按钮</button>
        <button @click="emit('myClick', 'hello')">按钮</button>
    </div>
</template>

<script setup>

const handleClick = () => {
    emit('myClick', 'hello')
}

const emit = defineEmits(['myClick'])


</script>

<style scoped></style>