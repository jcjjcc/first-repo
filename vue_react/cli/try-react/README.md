# React repos 项目列表

 - 用户的仓库列表
   - repos 组件
- react 组件
  - .vue,  .jsx 组件
  - component/  ->  组件库
  - 相比于vue的三部分， react 函数即组件
    - 首字母大写
    - 返回html模板, JSX

- vue和react的区别和相同点
   - 组件化思想
   - 现代化前端编程
   - 都有工程化配套
   - 响应式，数据驱动， 不需要DOM操作
   - 挂载点
   - 数据绑定 {{}}  {}

- 区别
  - .vue  .jsx
  - 三段式  函数即组件/css单独一个文件
  - vue好入门，api丰富， react难，但纯粹
  - vue css在组件内部，react css单独一个文件
  - 组件 = 组（html，css，js）+完成一件功能的拆分
  - vue template 语法， react JSX语法
    - JSX是react最漂亮的部分   在函数中最方便的表达UI部分 本身不可以 ，react会去解析JSX html(XML) in js  html是XML的一种
    - 不能写class，只能用className



- 组件类
  - 封装组件 import + export default 功能的拆分
  - 函数（构造）组件 ，return html是必须的
  - 组件可以复用
  - 封装的是UI + 响应式数据
  - 只需要写原生JS