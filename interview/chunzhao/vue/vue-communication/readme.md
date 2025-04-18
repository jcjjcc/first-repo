# 组件通信
给面试官挖坑
vue2/vue3 语法区别
组合式和选项式的区别
设计模式
vue3 8种   vue2 12种
- 父子组件通信
  - props defineProps
    两种写法 选项式 组合式 引导 组合式的优势


  - emit defineEmit
    单向数据流 兄弟组件状态共享 数据状态由父组件控制 父组件通过props传递数据给子组件 子组件通过emit触发事件 父组件通过自定义事件来更新状态


  - 事件总线 eventbus
    订阅发布