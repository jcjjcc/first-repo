# VUE + REACT CLI 命令行

- vue-cli command line
  - 比较复杂的大型项目
  web app 而非page
  - npm init vite
    vite 快速前端项目构建工具
    - 标准项目模板
     - 没必要每次都搞




- 项目的结果
  - package.json 项目描述文件
    - vue 3^  开发和上线了都要用到
      "dependencies": {
         "vue": "^3.5.13"
       },
    - vite 6^  开发环境才用, 上线了不需要  (前端基建) vite是包工头
      "devDependencies": {
       "@vitejs/plugin-vue": "^5.2.1",
       "vite": "^6.0.3"
       }
    - 
        "scripts": {
          "dev": "vite",         // npm run dev 启动开发环境
          "build": "vite build",  // npm run build 打包上线
          "preview": "vite preview" // npm run preview 预览上线结果
      },
- 工程的的不同生命周期
  - dev 开发
  - test 测试
  - build 打包上线
  - online 运营维护

- npm run dev   vite
  -http协议  5173端口 index.html 
  - 首页 website
  - 挂载点
  - src/main.js 入口文件

- src/main.js
  - src 开发目录  开发的主战场
  - main.js 入口文件 
    createApp().mount('#app') 
  - App.vue 根组件
    .vue 专属后缀
    - 三段式
      - template  模板 结构
      {{}}
      - script  逻辑 功能
        响应式
        事件
      - css

    - 组件是一个 > html 的页面构建模块
      组件是现代化前端的开发新单元 (比html更高级)
      组件 = 一个逻辑单元的html + css + js
      某项功能的抽象  

    - 现代前端拥抱组件思维
    - 组件按功能划分
    - 组件 = html(一堆) + js(一堆) + css(一堆)
    - .vue 三段式组合这个组件
    - 轮播图 经典组件
    - 前端开发单位是组件，不是页面
      不能以html页面为单位开发? 单个功能弱小

    - 从工程化角度理解组件
     - 按功能划分, 好安排工作
     - 组件可以复用(.vue) 哪里要用  import
     -  好维护
    - 组件以标签的方式嵌入页面


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