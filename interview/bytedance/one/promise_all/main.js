const fs = require('fs');
const res = []
//多个异步任务同步化解决方案：
//1.回调函数嵌套
// 缺点：回调地狱 代码可读性差
// fs.readFile('./a.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     // console.log(data.toString())
//     res.push(data.toString())
//     fs.readFile('./b.txt', (err, data) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         res.push(data.toString())

//         fs.readFile('./c.txt', (err, data) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
            
//             res.push(data.toString())
//             console.log(res)
//         })
//     })
// })

//2.promise链式调用
const readFilePromise = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
            } else {                
                resolve(data.toString())
            }
        })
    })
}

// readFilePromise('./a.txt')
// .then(data => {
//     res.push(data)
//     return readFilePromise('./b.txt')
// })
// .then(data => {
//     res.push(data)
//     return readFilePromise('./c.txt')
// })
// .then(data => {
//     res.push(data)
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
//     console.log(res)
// })


//3.async/await
(async ()=>{
    try {
        const textA = await readFilePromise('./a.txt')
        res.push(textA)
        const textB = await readFilePromise('./b.txt')
        res.push(textB)
        const textC = await readFilePromise('./c.txt')
        res.push(textC)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
})()