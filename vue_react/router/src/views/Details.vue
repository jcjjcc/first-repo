<!-- query传参 -->
<!-- <template>
    <div>
        <ul>
            <li>编号:{{ route.query.id }}</li>
            <li>编号:{{ route.query.title }}</li>
            <li>编号:{{ route.query.content }}</li>
        </ul>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
let route = useRoute()
console.log("query:",route.query)
</script>

<style scoped>

</style> -->

<!-- param传参 -->
<!-- <template>
    <div>
        <ul>
            <li>编号:{{ route.params.id }}</li>
            <li>编号:{{ route.params.title }}</li>
            <li>编号:{{ route.params.content }}</li>
        </ul>
    </div>
</template>

<script setup>
import {useRoute } from 'vue-router'
let route = useRoute()
console.log("params:",route.params)
</script>

<style scoped>

</style> -->

<!-- props传参 -->
<template>
    <div>
        <ul>
            <li>编号:{{ id }}</li>
            <li>编号:{{ title }}</li>
            <li>编号:{{ content }}</li>
        </ul>
    </div>
</template>

<script setup>
defineProps(['id','title','content'])
</script>

<style scoped>

</style>