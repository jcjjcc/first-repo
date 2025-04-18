# 图片懒加载
- 性能优化
  优化下页面的加载速度  大量图片 增加http并发数  + 分屏加载
  

- src -> data-src
  onscroll
   节流
   判断图片是否在可视区
   getBoundingClientRect
   intersectionObserver

- v-lazy  vue 中图片懒加载
  