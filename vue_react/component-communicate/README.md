- vue3 响应式
  - ref   .value  响应式对象 Object.defineProperty
  - reactive   响应式代理  proxy 代理对象  开销大

- 父子组件通信
  - props 父传子 传的是数据
 - 子传父
  - @child-message="handleEvent"  自定义事件 + 处理函数     attrs 
  - 子组件  一切由外界传的  都得声明一下
  emit 汇报
    emits = defineEmits(['child-message'])
  - emits(event_name, params)
 - 父主动去获取子组件的数据  
   <Child ref="comp"/>
   - ref标记DOM元素 
   - 子组件暴露数据
    defineExpose({
    childName: '这是子组件的属性',
    someMethod(){
        console.log('这是子组件的方法')
    }
})