// Primitive -> String
// 构造函数来用
console.log(String()) // 什么都不传，默认是""
console.log(String(undefined),'undefined') // undefined
console.log(String(null),'null') // null
console.log(String(0),String(-0),String(+0)) // 0
console.log(String(NaN)) // NaN
console.log(String(true),'true') // true
console.log(String(false),'false') // false
console.log(String(123),'数字123') // 123
