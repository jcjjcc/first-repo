# vue 全家桶之 vue-router 路由

- vue 语法 组件(vue2选项式/vue3组合式 适合大型项目 200行)、响应式、声明周期、指令(v-if、v-for、v-model)、三种数据(自已数据ref、参数props、computed)
只做最关键的
- vue-router 路由 vue的周边生态
  - 跳转到其他页面 路由
- vuex/pinia 状态管理

## vue-router 
- 将接管路由，像交警一样
- router-link  取代标签a
  a 标签
  router-link 组件包含a的功能，路由对应的组件显示到响应的位置
  要启用，没启用时组件不会生效，无法识别的组件 会降级为一个 div元素 相当于一个标签
  - 启用步骤：
    - 安装
      npm install vue-router
    - 向vue添加vue-router  
      import VueRouter from 'vue-router'

    - router 专门的目录
      - index.js 路由配置 (入口文件)
      - router-link 组件 是 vue-router 提供的组件，use(router)之后  不用引入就可以生效

  - 业务熟练度
    - vue-router 语法细节
      - routes 拆分 亮点
       [
        /
        /About 顶级路径
        ...users //用户模块
        ...posts //文章模块
       ]
       展开运算符
       - path 路由路径 component 组件名
        - name 路由别名
        - props 路由传参

  - 路由历史记录 history
    router-link 组件 而不是 a 标签
    router.push() 入栈
    栈顶是当前的路由所显示的组件
    前进，后退
    导航 = url + history  navigator
      
  - 实战开发
    - stylus 
      加速css开发
      npm i -D stylus 当前项目安装stylus包
      