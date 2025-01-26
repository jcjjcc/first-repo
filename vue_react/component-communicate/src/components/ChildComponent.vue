<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="sendMessageToParent">发送消息给父组件</button>
    </div>
</template>

<script setup>
import { 
    ref,
    defineProps,
    defineEmits,
} from 'vue'
const childMessage = ref('Hello ,parent!')


// emits 触发 汇报
const emits = defineEmits(['child-message'])
const sendMessageToParent = () => {
    
    emits('child-message', childMessage.value)
}
</script>

<style scoped>

</style>