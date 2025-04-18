- TCP/IP 

- Socket 是应用层协议。

长链接
消息推送
广播
- B/S 架构

- http 协议 和 websocket 协议的区别
  - http 是无状态的 
      每次请求都是独立的，url相同返回一致，但是可以通过 cookie 来保存身份信息
    websocket 是有状态的（socket 链接之后，会给每个链接分配一个socket id）

  - http 是单向的  websocket 是双向的
    http  client -> request -> server -> response -> client 单向
    websocket 双向的 服务器可以主动发送消息给客户端

  - http 是基于请求响应的  
  
    websocket 是基于事件的
    onmessage 
    send

- websocket 服务搭建的流程
  - 首先基于http服务 访问chat 页面
    只需一次http请求
  - html websocket 向服务端的socket 服务发起链接
   
    