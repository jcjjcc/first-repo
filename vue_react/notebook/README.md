# React NoteBook 全栈

- npm i react-router-dom -S 
  --save 的简写  一直依赖  react-router-dom@7 
  --save-dev -D 开发阶段依赖
- 项目阶段
  - 开发阶段 development   vite 
  - 测试阶段 test   其他同事的电脑上 没有环境 npx 
  - 上线阶段 production    打包-》 项目部署？-》 dns -> 上线

- 编程风格
  - react 组件 由函数组件jsx 文件 + 样式文件css 组成
    - 组件目录大写 
    - 组件声明文件小写 名字叫index.jsx 
    引入的时候 直接引入组件目录即可， 组件类的作用， 同时不用去引入 index.jsx 
  - return (JSX)  dom树的对齐， 优雅

- 页面级别组件
  - 首页
    Home.vue 

- es6 module 的语法
  import React, { useState as , useEffect, useMemo } from 'react'
  default  解构的引入
  import React.useState from 'react'
  import * as React from 'react'

  as 起别名

- key 的用法
  循环输出组件，需有给唯一的key 值需要唯一
  update 性能 

- 选择框架
  - zarm 移动端react ui组件库
    指定3.1.2版本 npm i zarm@3.1.2
  - 引入组件 button
  - 引入样式
  - 引入配置ConfigProvider theme  primaryColor
  - 主题定制 theme primaryColor
- npm run build
  - 上线之前先打包
  - dist/ 结果目录
    性能 
    - src/ 开发目录
      代码质量和可读性
    - 不需要注释、换行等，只要浏览器运行就好 
      文件小，压缩， 传输更快
    - 组件打包成js文件， css 打包成一个css文件 
      性能优化 http 并发数 一个js 文件 
      - 依赖关系
        - 不需要模块化
          被依赖的放在上面， 依赖的放在下面
        - 递归依赖关系
        - 打包成一个js文件
    - vite 很快 
    - 截图
      size  gzip 大小 http 主动启动gzip   压缩传输的
      底层是tcp/ip 

- vite
  - 自动引入css样式，并且按需加载 vite-plugin-style-import 
  - vite.config.js中配置

- less stylus css 预编译
  - npm i less -D
  - 快 
  - less 
  - 变量、嵌套、混合函数
  - module css 
    - style.module.less
    - 支持 css 模块
      - vite 申明 less -> 解析
      - {s.index} 
      - 构建工具自动生成唯一类名
            css:{
              modules:{
              localsConvention:'dashesOnly'
              }      ,
            }

- 移动端适配

  rem 10rem = 宽度 
  - lib-flexible  rem 适配 
  - postcss-px2rem 包 自动化px 转 rem  提高开发效率
    - PostCSS 允许开发者通过一系列插件来处理和增强 CSS 文件，使其具备更高的可维护性、兼容性和性能。

- axios 
  - baseURL 前后端分离，前端访问后端接口，一般都会以/api 开头 baseURL统一配置
  - axios proxy
    跨域解决新方案
  - 请求、响应拦截器
   - 统一的token处理
     统一的请求报错处理
   - axios相比fetch的区别和好处

  


- cookie
 - XSS 跨站脚本攻击
不法分子利用网站漏洞，注入恶意脚本代码，在用户浏览网页时执行，从而获取用户敏感信息（cookie）或执行其他恶意操作
 - 大小 kb 
   请求时浏览器帮你自动带上  太大会影响http性能
 - domain
 - expires
 - httponly只有请求时带上 js没有办法获取 更安全
   XXS攻击
 - secure
 - samesite strict lax  none
 


- react的props类型约束
  -  npm i prop-types
  - 函数组件对象的proTypes属性
   比如NavVar组件接收了一个showNav的prop
   NavBar.propTypes = {
    showNav: PropTypes.bool
  }
   
- css
  - npm i classnames
     classnames是一个用于动态生成CSS类名的工具库,支持根据条件灵活组合多多个类名,简化了JSX中类名管理。通过 cx函数,你可以方便地在React组件中应用条件样式。
  - 伪类选择器 nth-of-type

  

## 业务开发
- NavBar组件 公共组件 导航栏
  使用的是zarm TabBar
- 单页应用
- react的hooks ？
  - memo
  - useMemo
  - useCallback 
  



- 假如你是前端工程师 使用react + javascript 技术栈， 请根据上图分析功能模块和交互细节 给出要开发的功能点， 难点 和预计需要的开发时间。 只需要开发前端， 后端不需要考虑。




## 开发流程
 - idear 创意
   - aigc结合
 - 需求分析
   - 用户需求
   - 功能需求
 - 建立数据库
   - 设计表结构
 - 前端开发
   - react
 - 后端
   - egg.js
 - 测试
 - 部署上线

 - 跨域
   proxy代理  如果前端直接axios发送 XMLHTTPRequst请求，会被浏览器限制
   如果vite服务先拦截了，由服务器向后端发送请求，就是普通的http请求
   - 开发阶段跨域？
   - 上线阶段会吗？

 - AI编程工具的使用
   - MarsCode
   - Cursor/Trade
   - prompt engineering
   - 多语言 低代码 快速学习 
   - 细节功能 喂伪代码 使得aigc代码更靠谱
   
 - mysql
   - msyql2 数据库驱动
   - egg-sequelize  orm框架
     不需要写sql语句 直接对象开搞 封装了sql
 - service层
   数据库操作CURD
 - model层
   将数据库表映射成对象
    ORM 对象关系映射 讲数据库与程序中的对象建立映射，让开发者用操作对象的方式操作数据库
 - controller层
   处理请求和响应
  
   

- utils目录下 和 hooks目录
- react和vue slot 和props.children的区别
  

- 登录
  - 前端login组件  表单提交
  - 