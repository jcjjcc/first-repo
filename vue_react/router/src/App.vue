<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <header>
  
      <!-- 导航区 -->
      <nav class="navigate">
        <RouterLink to="/home" active-class="active">首页</RouterLink>
        <RouterLink :to="{name:'news'}" active-class="active">新闻</RouterLink>
        <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>
      </nav>
    </header>


    <!-- 展示区 -->
    <main class="main-content">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup>

</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  padding: 10px;
}

header, .main-content {
  margin-bottom: 20px;
}

.navigate {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
}

.navigate a {
  text-decoration: none;
  color: #069;
}

.navigate a.active {
  font-weight: bold;
}

.main-content {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
}
</style>
