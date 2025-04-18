<template>
    <div>
        heloo
    </div>
</template>

<script setup>
defineExpose({
   childName: 'childName',
   someMethod: () => {
     console.log('someMethod')
   }
})
</script>

<style scoped>

</style>