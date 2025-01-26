# 跨域

- 运行环境
  - 前端
    v8 引擎在浏览器
  - 后端
    node 封装了v8 引擎 , 剥离了html, 借助c++ 去调用系统服务
    http 模块 就是 node实现的

  - 为什么node 有模块化需求？
    - 引入各种模块
    - 后端功能复杂
    - mvc 
      model 连数据库
      controller 控制器 参数校验、业务逻辑处理
      view 视图层 展示数据
  - require - > es6 module

- 为何要学node？
  - 后端开发
  - 大前端
  - 简单性能好

- CORS policy 
  - 安全策略
  - baidu -> goole(不受信任度) 不同的域名
  - http://127.0.0.1:3000 
    http://localhost:3000  

  - 保护谁?
    - 后端，制定规则
      目前没有block
    - 前端
      JS 限制 跨域请求
      JS dom 修改页面内容  跨域内容收到限制
  - Cross-Origin Resource Sharing
    Origin = Domain + port + protocol
  
  ## 前后端分离
  - vue 开发前端
  - node/java 开发后端
  - 开发日常 跨域是家常便饭


  - script 标签 src 跨域请求
    - 不受同源策略限制
  - http 请求 将后端qpi 接口资源拿到
    - src = api url
  
  - script 阻塞式加载并执行
  - jsonp 
     json with padding(函数)