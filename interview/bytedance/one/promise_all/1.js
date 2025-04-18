const weather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({temp: 29, condition: 'Sunny'});
        // reject('error');
    }, 1000);
})


const tweets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I love #javascript');
        // reject('error1');
    }, 3000);
})

const facebook = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I love #facebook');
        // reject('error2');
    }, 2000);
})


//简单 并发
//多个异步任务
//all
Promise.all([weather, tweets, facebook]).then(values => {
    console.log(values);
})
.catch(error => {
    console.log(error);
})

//race
// Promise.race([weather, tweets]).then(values => {
//     console.log(values); 
// }).catch(error => {
//     console.log(error); 
// })

//allSettled
// Promise.allSettled([weather, tweets]).then(values => {
//     console.log(values);
// }).catch(error => {
//     console.log(error);
// })

//any
// Promise.any([weather, tweets]).then(values => {
//     console.log(values); 
// }).catch(error => {
//     console.log(error); 
// })