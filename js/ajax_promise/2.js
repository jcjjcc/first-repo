// 实例化时 传递函数 里面装耗时性任务
const p = new Promise((resolve,reject) => { //executor 执行器 立即执行

    console.log('333'); // 同步任务
    setTimeout(() => {
        console.log('222');
        //resolve()
        reject('BMW325') 
    },1000)
})

console.log(p.__proto__,p);

//异步任务的执行顺序控制的话，用promise
p.then((data) => {
    console.log('111');
    console.log(data);
    console.log(p);
})
.catch(() => {
    console.log('error');
})

