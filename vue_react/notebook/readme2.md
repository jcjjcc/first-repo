# notebook 后端api服务
## egg.js 阿里的开源框架

- koa 极简
  - middlewares 洋葱模型 函数
  - http listen 
  - ctx
- 企业级开发 中大型项目 
  mvc
  npm init egg --type=simple
  后台开发的模板
  - app目录 - 应用开发的主目录
  - 约定
   - router.js 后端的路由
  - URL的构成
  queryString
  http://localhost:5173/user?id=1
  param
  http://localhost:5173/user/1
- csrf 攻击  跨站请求伪造
  - 拦截？
    apifox 不是用户
    userAgent -HTTP 请求头中的一个字段，它是客户端发送给服务器的一个标识字符串，用于告知服务器关于客户端的相关信息
  - userAgent

    navigator.userAgent 返回的值与浏览器在发送 HTTP 请求时，请求头中 User-Agent 字段的值是一致的。浏览器会将 navigator.userAgent 所代表的客户端信息，包含客户端的应用程序类型、操作系统、软件版本等，放在 User-Agent 请求头中发送给服务器，这样服务器就能依据该信息对客户端进行识别和处理。


- post 请求体的格式区别
  - form-data 有附件
  - x-www-form-urlencoded 简单的键值对数据，不支持文件
  - 
  - json 复杂数据结构，支持数组或嵌套对象，更加灵活
- get/post 区别
 a