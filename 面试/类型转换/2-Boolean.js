// Primitive -> Boolean

// 构造函数来用
console.log(Boolean()) // 什么都不传，默认是false
console.log(Boolean(false)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(+0),'+0') // false
console.log(Boolean(-0),'-0') // false
console.log(Boolean(NaN),'NaN') // false 
console.log(Boolean(''),'空字符串') // false