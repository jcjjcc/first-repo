- 路由有几种形式
  - hash
  - history
- 为何要有前端路由
  - 用户体验 块
    传统的 慢 白屏

  - 单页应用 SPA

  - 两种路由的优劣
    hash #/hello  兼容性好 url的一部分
    http://localhost:3000/user/:id?a=1&b=2#/hello
    锚链接 锚定页面的某个位置
    
    hash 原理
    url的哈希部分改变，不会引起页面的重新加载
    同时哈希部分的切换，会触发hashchange事件 在router配置
    找到哈希值对应的component 替换router-view


后端路由:
接收-不同的URL-->不同的代码处理-->响应不同的数据(多数情况下是JSON数据(API接口)，还可以是一个HTML)

前端路由:
拦截-不同的URL-->不同的组件渲染(组件中可能向后端请求API接口数据)






安卓和IOS和前端开发