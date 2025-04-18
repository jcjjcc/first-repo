# 虚拟DOM？ virtual DOM

- 虚拟DOM 是**真实DOM**在内存中的轻量级副本
  - 内存中的对象 （描述真实DOM）
  - 新|旧  虚拟DOM diff patches
  - 一次性的作用到DOM 更新中

- 虚拟DOM
  - 虚拟DOM非常方便的描述真实DOM
  - type props children（[]） + 递归（树状结构）
  - 文本节点直接给文字内容

- 什么时候时候生成虚拟DOM
  template 编译  -》生成VNode -》render （渲染模块） -》生成真实DOM
  响应式  update 数据状态改变 -》没有虚拟DOM -》重新生成DOM -》整个替换（重绘，重排消耗太大了）

  虚拟DOM 生成新的Virtual Node （diff） -》新旧虚拟DOM 进行比较 -》一次性的收集所有的修改 patches  打包给DOM 一次性更新


- v-for key?
  增 删 改 移动
  ABCD -》 DABC

## diff算法
两颗新旧虚拟DOM树
patches 补丁[]
时间复杂度

- 暴力
  - 每个VNode 都去对比  