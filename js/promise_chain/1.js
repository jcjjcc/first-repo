const p1 = new Promise((resolve, reject) => {
   resolve('hello')
})

p1.then(data => {
   console.log(data)
   return new Promise((resolve, reject) => {
    //   resolve('world')
      reject(new Error('error'))
   })
})
.then(data => {
    console.log(data)
})