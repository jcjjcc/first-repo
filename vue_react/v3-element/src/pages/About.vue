<template>
    <div>
        About{{ username }}
    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import { getUserInfo } from '../api';
const username = ref('')
onMounted(()=>{
    const getUserInfoRes = async() => {
        const res = await getUserInfo()
        console.log(res)
        username.value = res.data.data.user
    }
    getUserInfoRes()
})
</script>

<style scoped>

</style>