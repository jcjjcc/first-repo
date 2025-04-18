console.log([1,2,3].map(item => parseInt(item)))
console.log([1,2,3].map(parseInt))
// parseInt(1, 0)
// parseInt(2, 1)
// parseInt(3, 2)

console.log([1,2,3].map((item,index,array) => {
  console.log(item,index,array)
  return parseInt(item,index)
}))

// 直接将 parseInt 作为 map 的回调函数时，map 会依次将当前元素的值、当前元素的索引和原数组传递给 parseInt。而 parseInt 函数接收两个参数：第一个参数是要解析的字符串，第二个参数是基数（可选，范围是 2 到 36）。


// console.log(parseInt(10,8))