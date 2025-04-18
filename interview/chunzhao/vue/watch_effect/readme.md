# watch 与 watchEffect 的区别

- 监听响应式数据变化的重要函数
- ref & reactive 简单的状态绑定
- computed 响应式数据的**计算**  自动处理依赖
  计算场景 （购物车total）
- watch 监听响应式数据的变化 执行复杂逻辑 请求
  - 复杂业务 （异步，检查库存）
  - 手动指定依赖数据源
- watchEffect 立即执行一次 自动处理依赖 数据修改后的副作用


