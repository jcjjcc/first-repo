- 同源策略？
- jsonp 有啥缺点？
  - 不安全
    <script src=""></script>  为什么不安全？ XSS（注入恶意脚本）攻击
    callback(data)
  - GET 方法 不能post 为什么？

  - 会阻塞页面的渲染 影响性能 
  - 不太好处理HTTP 错误，回调函数只在成功时调用

现在应用推荐CORS 代替JSONP
- CORS
  跨域资源共享
  Access-Control-Allow-Origin: *
  服务端设置允许跨域的域名
  跨域白名单
   - 允许跨域的域名组合
   - req.header.origin
   - indexOf 
   - 服务端设置响应头
   Access-Control-Allow-Origin: orign || *
   Access-Control-Allow-Methods
    允许的请求方法
   Access-Control-Allow-Headers
    允许的请求头
   Access-Control-Allow-Credentials
    是否允许携带cookie
   Access-Control-Max-Age
    预检请求的有效期，单位为秒。
    - 预检请求
      - 简单请求
        - GET POST HEAD
      - 复杂请求
        - PATCH PUT DELETE

  - websocket
    不受同源策略的限制
    消息机制
    101 升级协议

  - postMessage html 新特性
    iframe 跨域通信

  - vite proxy 反向代理
    
  