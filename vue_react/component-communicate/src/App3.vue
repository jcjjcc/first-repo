<template>
    <div>
        <h2>父组件</h2>
        <p>来自子组件的消息：{{ messageFromChild }}</p>
        <!-- 父子组件之间约定：子组件调用child-message事件传递消息给父组件，父组件监听child-message事件处理消息。 -->
        <ChildComponent @child-message="handleChildMessage" :title="title" />
    </div>
</template>

<script setup>
// @ 事件  不是js的内置事件  是自定义事件
// 父子组件通信 
import { ref } from 'vue'
import ChildComponent from './components/ChildComponent.vue'
const title = ref('这是来自父组件的消息')
// 自定义事件 child-message  父子组件之间的约定 子组件调用child-message事件 传递消息给父组件
const messageFromChild = ref('')
// 处理子组件的消息  handleChildMessage 事件处理函数
const handleChildMessage = (message) => {
    console.log('父组件收到子组件的消息：', message)
    messageFromChild.value = message
}
</script>

<style scoped>

</style>