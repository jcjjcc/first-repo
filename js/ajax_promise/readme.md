- es6 promise 
  Promise 类  专门解决异步耗时性问题，执行流程可控
  其他大型语言一般是同步的，js 通过 es6 promise 解决了单线程 异步不好控制的问题
  promise 让异步变同步 提供了完善解决异步任务的机制
  - 口袋 装耗时性的内容 executor 立即执行
    - resolve reject 两个函数参数
      resolve 成功的回调函数  then
      reject 失败的回调函数  catch
  - then 方法 等他完成后
    resolve(data) 后执行回调函数 data 传给回调函数
  - catch 方法 等他失败后
    reject(error) 后执行回调函数 error 传给回调函数
  - 三种状态
    - pending 等待中 实例化后  reslove reject 之前
    - fulfilled 成功  resolve 之后  得从 pending 变成 fulfilled
    - rejected 失败  reject 之后  得从 pending 变成 rejected

    promise 诺言 状态只会从 pending 变成 fulfilled 或 rejected 不会变成其他状态
    状态一旦改变 就不会再变回原来的状态
  
    