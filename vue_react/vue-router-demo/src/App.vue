<script setup>
import {RouterLink,RouterView} from 'vue-router'
const name = 'router-demo'
</script>

<template>
  <div class="page">
    <header class="page-header">
      <h3 class="brand">{{ name }}</h3>
      <nav class="menu">
        <!-- <router-link class="menu-item" to="/">首页</router-link>
        <router-link  class="menu-item" :to="{ name: 'about' }">关于</router-link>
        <router-link  class="menu-item" :to="{ name: 'post-index'}">内容</router-link> -->
        <RouterLink class="menu-item" to="/">首页</RouterLink>
        <RouterLink  class="menu-item" :to="{ name: 'about' }">关于</RouterLink>
        <RouterLink  class="menu-item" :to="{ name: 'post-index'}">内容</RouterLink>
      </nav>
    </header>
    <main class="page-body">
      <!-- <router-view />  -->
        <RouterView />
    </main>
  </div>
</template>

<style lang="stylus" scoped>
.page
  padding 32px
.page-header
  display flex
  align-items center
  border-bottom 1px solid #ccc
.brand
  margin-right 32px
.menu-item
  display inline-block
  text-decoration none
  color #333
  margin 8px
  padding 8px 16px
.page-body
  margin 24px 0
.router-link-active
  color #505050
  background #eeeeee
  border-radius 4px


</style>
