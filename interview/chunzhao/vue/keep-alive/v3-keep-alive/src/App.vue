<script setup>

</script>

<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/page-a">页面A</router-link>
    <router-link to="/page-b">页面B</router-link>
    <hr>
    <router-view v-slot="{ Component }">
      <keep-alive>
        动态组件
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped></style>
