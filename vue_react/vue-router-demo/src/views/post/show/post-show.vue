<template>
    <div>
        PostShow{{ postId }}
    </div>
    <hr>
    <router-view/>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute() // 拿到了当前路由
//console.log(route)
const {postId} = route.params

</script>

<style scoped>

</style>