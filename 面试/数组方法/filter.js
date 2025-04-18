let nums = [10,5,2,6]

let arr = nums.filter(item => item % 2 !== 0)
let arr1 = nums.filter((item,index) => {
    console.log(item,index)
    return item === 10
})
console.log(arr)