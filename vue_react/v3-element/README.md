# 如何开发一个vue项目
- vite工程化
    npm init vite
  - vue 核心语法（响应式、组件化、指令等）
  - vue-router
  - pinia
  - element3  UI 组件库
  - stylus
  - axios Ajax请求封装库

- app.use
  向vue实例中注册插件 生态 
  elements 提供的组件可以全局使用
   - 主要问题
     - element3 组件 以 el-开头
       不要重复造轮子 70% 的功能都可以用 element3 组件实现
     - 性能问题
       组件库的体积很大，加载速度慢，影响页面渲染速度
       可以考虑按需加载
## 项目亮点 
- 项目全面使用es6+ 风格
  代码简洁 易读 易维护
- 良好的注释
- 良好的git 提交记录和习惯
- 按需加载vue组件库element3，性能优化，加载速度
- 路由
  - 多级路由
    二级路由 path 前面 不要 /
  - path component name meta
  - 路由懒加载
    最佳用户体验，提高页面加载速度
    按需加载页面组件，函数引入方式 () => import('组件路径')
  - 路由守卫