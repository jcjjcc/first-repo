# vue 响应式
- 响应式的原理
- ref/reactive api
- Proxy vue/react
- Object.defineProperty 
- 手写响应式

## vue架构
### 1.声明式框架
### 2.虚拟DOM
### 3.区分编译时和运行时
### 4.VUE3设计思想
- 拆分模块
- 组合式API
- 自定义渲染器 
  - 适配各种UI （网页、小程序、Native App）
  平台无关性（平台无关渲染逻辑）


- vue runtime 运行vue的核心代码
- 组件 响应式(mvvm) 虚拟DOM



- reactive 包装类一个普通对象变成响应式对象

## 响应式机制的主要功能
 可以把普通对象封装成为响应式对象，拦截数据的获取和修改操作（proxy 的get set），实现依赖数据的自动化更新（{{}}...）
 - 专注于业务逻辑
 - 脱离底层DOM 性能提上

 步骤
 - reactive() 封装普通对象
 - proxy 对象的代理
 - 收集依赖 （effect）

 - proxy 比 Object.defineProperty 优势
   - 懒代理
     多级菜单
     支持深度代理 递归
     defineProperty 性能不好 必须一次性完成深度拦截
   - reactive 和 shallowReactive 区别
     - shallowReactive 只代理第一层
     - reactive 深度代理
  