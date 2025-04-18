## JS 单线程工作模式
原因：JS的设计初衷是为了实现网页的动态效果，核心是DOM操作
优点：
 - 安全简单
 - 
缺点：
 - 阻塞执行
所以js将任务的执行模式分为同步模式和异步模式

## 同步模式与异步模式
### 同步模式（Synchronous）
```
console.log('global begin')
function bar () {
console.log('bar task')
}
function foo(){
console.log('foo task')
bar()
}
foo()
console.log('global end')
```
同步模式是按顺序执行的，前一个任务结束后，才会执行下一个任务，当某个任务耗时较长时，后续任务只能等着，效率较低。反应给用户的就是页面卡顿。所以必须要有异步模式来解决这个阻塞问题。
### 异步模式（Asynchronous）
- 不会等待前一个任务结束，而是直接执行下一个任务，当某个任务耗时较长时，后续任务可以继续执行，不会被阻塞。
- 后续逻辑一般会通过回调函数的方式定义
- 没有异步模式，单线程的js就无法同时处理多个耗时任务。
- 事件循环与消息队列

### 回调函数
- 回调函数--所有异步编程的根基
- 由调用者定义，交给执行者执行的函数-函数作为参数
- 回调地狱--回调函数嵌套
- 新的方案 Promise

### Promise
- 解决回调地狱问题
#### 概述
- 状态：pending（等待中）、fulfilled（成功）、rejected（失败）

Promise异步方案、宏任务/微任务队列
Generator异步方案、Async/Await语法糖

