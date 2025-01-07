<template>
    <div>
        <Child ref="comp"/>
        <button @click="handleClick">按钮</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const comp = ref(null) // 标记DOM元素  null 组件没有挂载 BOM也没在
const title = ref('标题') //标记数据
const handleClick = () => {
  console.log(comp.value.childName)
  comp.value.someMethod()
  console.log(title.value)
}
</script>

<style scoped>

</style>