<template>
    <div class="news">
        <ul>
            <li v-for="item in newsList" :key="item.id">
                <!-- query传参 -->
                <!-- 还可以直接路径传参 key-value 路径体现了参数-->
                <!-- <RouterLink :to="{name:'detail', query:{
                    id:item.id,
                    title:item.title,
                    content:item.content
                }}">{{item.title}}</RouterLink> -->
                <!-- <router-link :to="`/news/detail?id=${item.id}&title=${item.title}&content=${ item.content}`">{{item.title}}</router-link> -->




                <!-- param传参 直接value -->
                 <!-- 必须在路径上占位 否则会当成一个完成是路径一层一层去查找-->
                  <!-- 不允许传数组 -->
                   <button @click="showNewsDetail(item)">新闻详情</button>
                  <RouterLink :to="`/news/detail/${item.id}/${item.title}/${item.content}`">{{item.title}}</RouterLink>
                <!-- <RouterLink :to="{name:'detail', params:{
                    id:item.id,
                    title:item.title,
                    content:item.content
                }}">{{item.title}}</RouterLink> -->


                <!-- <RouterLink :to="{name:'detail', query:{
                    id:item.id,
                    title:item.title,
                    content:item.content
                }}">{{item.title}}</RouterLink> -->


            </li>
        </ul>
        <div class="content">
            <RouterView/>
        </div>
      
    </div>
</template>

<script setup>
import{reactive} from 'vue'
import {useRouter} from 'vue-router'
const newsList = reactive([
    {
        id:1,
        title:'新闻1',
        content:'新闻内容1'
    },
    {
        id:2,
        title:'新闻2',
        content:'新闻内容2'
    },
    {
        id:3,
        title:'新闻3',
        content:'新闻内容3'
    }
])

const router = useRouter()
const showNewsDetail = (item) => {
    router.push({
        name:'detail', 
        params:{
            id:item.id, 
            title:item.title, 
            content:item.content}
    })
}
</script>

<style scoped>

</style>