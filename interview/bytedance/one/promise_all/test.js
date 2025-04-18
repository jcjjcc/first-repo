
const  a = new Promise((resolve, reject) => {
    resolve(1);
})

a.then(res => {
    console.log(res);
    return 2
})
.then(res => {
    console.log(res);
    return new Promise((resolve, reject) => {
        resolve(6);
    })
})
.then(res => {
    console.log(res);
})

