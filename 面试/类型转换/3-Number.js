// Primitive -> Number
// 构造函数来用
console.log(Number()) // 什么都不传，默认是0
console.log(Number(123)) // 123
// undefined 在数值上下文中没有转成一个特定数字的含义，而是转成了NaN
console.log(Number(undefined),'undefined') // NaN
console.log(Number(null),'null') // 0
console.log(Number(false),'false') // 0
console.log(Number(true),'true') // 1
console.log(Number(''),'空字符串') // 0
console.log(Number('123'),'字符串123') // 123
console.log(Number('-123'),'字符串-123') // -123
console.log(Number('0x11')) 
console.log(Number(""),Number(" ")) // 0
console.log(Number("100a"),'字符串100a')// NaN
console.log(Number("-0")) // -0
console.log(Number("+0")) // 0
// console.log(parseInt("0"))
// console.log(parseInt("-0"))
// console.log(parseInt("+0"))
    

console.log('------')

console.log(Number(' 123 ')) // 123
console.log(Number('+123')) // 123
console.log(Number('-123')) // -123
console.log(Number('0x11')) // 17 16进制
console.log(Number('--123')) // NaN
console.log(Number('123abc')) // NaN
console.log('------')

console.log(Number(-0)) 
console.log(Number(+0)) 