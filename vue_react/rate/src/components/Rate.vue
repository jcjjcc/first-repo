<template>
    <div>
        {{ rate }}
        {{ count }}
        {{ props.value }}
    </div>
</template>

<script setup>
import { ref,defineProps,computed } from 'vue';
let count = ref(0)// 组件自有的
// 子组件和父组件不一定是一直绑定的，哪里用往哪里搬
// 定义props 业务 消费数据，不是自身的数据，而由父组件绑定
// 告诉外界，我需要一个什么类型的数据
// 参数数据，外界的，不是自己
let props = defineProps({
    value:Number
})

// 
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))

</script>

<style scoped>

</style>