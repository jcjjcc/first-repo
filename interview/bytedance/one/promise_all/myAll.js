/** 
 * @param{promise[]} 
 * @return{promise}
 * @desc 
 * 1.所有传入的promise都成功，返回的promise成功，结果是一个数组，数组的元素和promise[]的顺序一致
 * 2.只要有一个失败，返回的promise就失败，第一个失败的promise的结果，就是返回的promise的结果
 */

const { error } = require("console");

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
        // resolve('I love #facebook');
        reject('error2');
    }, 2000);
})


Promise.myAll = function(promises){
    //promises resolved的结果存入数组中，数组的顺序和promises的顺序一致
    let arr = [],
        count = 0;
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,index)=>{
            promise
            .then(res=>{
                arr[index] = res;
                count++;
                if(count === promises.length){
                    resolve(arr);
                }
            },error=>{
                reject(error);
            })
            // .catch(err=>{
            //     reject(err);
            // })
        })
    })
}

Promise
    .myAll([weather,tweets,facebook])
    .then(res=>{
        console.log(res);
    },error=>{
        console.log(error);
    })
    