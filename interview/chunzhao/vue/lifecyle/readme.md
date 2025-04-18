# 生命周期

- 先以vue3 为例
  - 三个阶段
    - 挂载前后
    
    - 更新前后

    - 销毁前后

  - composition api
    - onBeforeMount
    - onMounted 
      发送请求 
    - onBeforeUpdate
    - onUpdated
      重新计算DOM 高度 比如 GPT聊天的时候，得到了新的回复 重新计算滚动条位置
    - onBeforeUnmount
      dom 节点还在 移除定时器  事件监听 取消网络请求
    - onUnmounted
    
  - keep alive 
   - onActivated
   - onDeactivated
- vue3 数据请求推迟到onMounted 规避SSR 副作用并保证逻辑在客户端执行

- vue 比 vue3 多了一个创建阶段    vue3的setup() 函数可以直接定义数据或初始化逻辑

- beforeCreate 实例化前 无法访问数据和方法 适合进行初始配置
- created 实例化后 可以访问数据和方法 适合进行数据初始化和方法的定义
  接口请求
- beforeMount 挂载前 可以访问DOM元素 适合进行DOM操作和事件监听
- mounted 挂载后 可以访问DOM元素 适合进行DOM操作和事件监听
- beforeUpdate 更新前 可以访问DOM元素 适合进行DOM操作和事件监听
- updated
- beforeDestroy
- destroyed
- activated
- deactivated
- errorCaptured 子组件编译错误


- react生命周期
  