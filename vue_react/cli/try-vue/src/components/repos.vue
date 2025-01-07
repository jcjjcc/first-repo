<template>
      <ul>
        <li v-for="repo in repos" :key="repo.id">{{ repo.name }}</li>
      </ul>
</template>

<script setup>
    const repos = [
      {
        id: 1,
        name: 'item1'
      },
      {
        id: 2,
        name: 'item2'
      },
      {
        id: 3,
        name: 'item3'
      }
    ]
</script>

<style scoped>

</style>