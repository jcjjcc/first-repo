# react fiber 时间切片

- 定时器
- requestAnimationFrame
- 文档碎片
- 最重要的？ js本质是单线程 主线程不能被一直占用 否则用户无法操作、交互
  用户体验
  - react17之前，同步渲染机制
    组件渲染或更新和用户交互两个任务会阻塞
    - 组件渲染或更新
      怎么样在一定时间后停下来，交出主线程执行权 到下一个时间点再继续  react性能优化的fiber机制 时间切片
    - 用户交互和事件处理  优先级更高
  - requestIdleCallback  UI 更新
    callback + 递归调用 时间间隔 1/60
    - react 16 之后
    - 事件分片
  - requestAnimationFrame 
    
