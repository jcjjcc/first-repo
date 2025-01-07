- react学习路径
 - react基础语法
 - hooks
 - react-router
 - 状态管理
 - 源码
 - ts
- AI Coding
  - VUE & REACT 
  - 自然语义编程
    tailwindcss 语义
    antd 组件

- 给一张设计稿  -》生成组件
- http(CDN 更快) 引入前端组件库
  - vue
    Vue 框架

- 挂载点
  - 将前端工作交给vue/react, 在html里只需要一个div，然后将组件挂载到这个div上，就可以实现前端的渲染。
  - 挂载Vue App 应用实例


- vue 哲学 让我们focus 业务的现代前端框架
  - html界面上升到应用的复杂, 现在前端复杂
  - Web应用是数据驱动的界面
  - vue 事件机制 方便 @event="handler"
  - 响应式编程
    - ref(0) 包装简单数据类型成为响应式对象
    - .value = ' ' 修改value,值改变的同时， 界面热更新
    - 规避DOM编程 
    - 不再为API编程, 而focus 业务开发


- App 和传统编程的区别
  - createApp() 创建一个Vue App
  - 并挂载到指定的DOM元素上, #root 结合
  - #root 里面 就是vue的世界
    {{count}}
  - {{}} vue的数据占位符
    可以改变的，不需要document.querySelector()
    {{data}}
    setup() {

        return{

        }
    }