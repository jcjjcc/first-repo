<template>
    <div>
        about
        <button @click="goHome">回到首页</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();  // 拿到了路由实例 总管
const goHome = () => {
    // js跳转
    // Browser Object Model > DOM
    //BOM API
    // 破坏了啥？ 
    // window.location.href = '/';
    router.push('/');  // 路由跳转
}
</script>

<style  scoped>

</style>