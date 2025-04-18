
- 二进制流传输
  - fs.createReadStream() 创建一个可读流
  - 接一根管道  pipe
  - 流向res


- url 输入到看到页面
  - 域名解析
    dns缓存
  - tcp/ip
    三次握手
  - http 请求
    请求行 GET /
  - cdn 服务器 (静态资源)
    缓存
  - ngnix(俄罗斯) 
    - 负载均衡
      算法 轮询 返回不忙的服务器
    - 方向代理
      http://localhost:8080
      www.baidu.com:8080?
      www.baidu.com:80 80http默认的端口
      80 -》 ngnix 配置 代理到 8080
  - server (硬件) 响应
     8080 -》web服务器 
  - dns预解析
  - 如果之前访问过的静态资源，可以使用浏览器本地缓存
    - 强缓存  主要用于静态资源
      响应头 Expires 到达之前 直接使用浏览器本地缓存
      缺点？
        服务器时间和客户端时间不一致
      新的响应头 Cache-Control
    - 协商缓存
      - 假如强缓存没有命中 或过期
      - 如果文件没有改变，返回304  Not Modified  直接使用本地缓存
      - 请求头和响应头  
       Last-Modified  文件修改时间 服务器端
       If-Modified-Since  浏览器端
       服务端时间不靠谱 分布式
       md5 计算       
       Etag 文件内容的hash 响应头
       if-none-match  浏览器端