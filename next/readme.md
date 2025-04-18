# react


npx create-next-app@latest

- react *全栈*框架
  - SSR 服务端渲染
    - 首屏加载块
    - SEO
    Next.js是强大的React全栈框架，支持SSR，首屏快且利于SEO，开发高效。

    - vercel
    01.dev AI代码生成工具
    - 企业站点
    

- notebook 笔记本
  - 后端 note 笔记的crud
    - next.js 全栈框架
    - redis  （内存）  mongodb 数据库  NOSQL 
  - 前端
    - noteList
    - 

  - 设置组件
    layout
    page
      commponent


  - 约定俗成的next
    - alias
    - page.js   页面组件
    - layout.js  布局组件
   





  - npm 包
    - uuid
    - dayjs

  - 组件的设计
    - 组件的拆分粒度
      - 复用性
      - 管理
      - 下线方便
    - 复杂组件
      SidebarNoteItem
      - 可展开收起
      - skeleton 骨架屏
        用户体验优化方案

    - 动态样式 展开/激活
    - 新增/修改后的动画 flash
    - onAnimationEnd 事件
    

    - nextjs  服务端组件和客户端组件
      - SidebarNoteItemHeader 粒度化 拆分后成为了服务端组件
      - SidebarNoteItemContent 事件交互 react hooks  use client  客户端组件  
      - 


    - 详情页
      - promise 之前 loading.js 会显示
      - skeleton 骨架屏
      - marked  markdown -> html
      - sanitize-html 过滤 html标签 防止xss攻击
      - dangerouslySetInnerHTML  渲染 html
      ```js
      var a = 1
      ```
      会被marked 转义为

      