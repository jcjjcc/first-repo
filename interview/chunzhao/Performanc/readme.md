# 性能优化
  
## 渲染方面有没有考虑性能优化
  - 重绘重排
    - 重绘？
      - 元素的外观被改变，但没有改变布局。
      - 例如，改变元素的背景颜色、文字颜色等。
      - 重绘的代价相对较低，因为它不会影响布局。
    - 重排？
      - 元素的布局被改变，包括但不限于元素的位置、大小、隐藏或显示等。
      - 浏览器需要重新计算布局，影响其他元素的位置和大小

      重排必定导致重绘，重绘不一定导致重排。
  - bad work
    - 批量修改DOM
      切换类名或cssText 代替流程化一句句的修改DOM
    - 文档碎片
      documnet.createDocumentFragment()
    - 脱离文档流进行操作
      先脱离（）
      再操作
      再回到文档流
    - 缓存布局信息
    - 使用transform

## 资源加载优化
  - 图片懒加载
    getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。
    intersectionObserver API
  - 路由懒加载
    () => import('./xxx')
    代码分割（code spliting） 懒加载的代码独立文件
  - 资源预加载 preload
    预解析DNS
    <link rel="dns-prefetch" href="//mo.m.taobao.com">
  - DNS 静态资源使用内容分发网络（CDN）
   

## JS 执行优化
  - 防抖节流
  - web worker ? 为了提升计算性能的html5新特新
  - requestAnimationFrame 
  - requestIdleCallback  react fiber 机制
  

## 框架层面优化
  - keep-alive 缓存组件
  - react useMemo useCallback 缓存计算结果
  - 使用key 优化列表渲染
  

## 缓存策略
  - localStorage sessionStorage cookie
  - 文件缓存 强缓存和协商缓存

## 网络优化
  - CDN 加速
  - Gzip 压缩
  - HTTP/2 多路复用 大文件上传 支持新版协议
  - DNS 预解析
  - 

## 首屏优化
  - SSR
  - 骨架屏
  - 首屏数据预加载  http2.0 server push
  
## 监控和分析
  - performance
    减少J首屏S/CSS 资源大小
  -  Lighthouse
  




- 用setTimeout模拟setInterval会有什么问题
- promise实现并发控制
- promise红绿灯
- 手写promise.allSettled
- 手写Promise
- http2.0多路复用是不是越多越好?会有上限码?
- cursor和windurf用的多吗? 占比多少? trae用过吗?






- 一万条数据渲染

   
    
    
    




      