console.log(1);  // 立刻执行，输出1
const p = new Promise(r => setTimeout(r, 1000));  // 创建一个新的 Promise，内有 1 秒延时
setTimeout(() => {  // 设置一个延时任务，默认是最小延时（大约 0 毫秒）
    console.log(2);  // 会在下一个事件循环中执行，输出2
})
await p  // 由于这个是 async/await，Promise 完成后继续执行下面的代码
console.log(3);  // 等待 Promise 完成后输出 3
