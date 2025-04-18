console.log(1 / +0) //Infinity 正无穷大
console.log(1 / -0) //-Infinity 负无穷大
console.log(1 / 0) //Infinity

console.log(Object.is(5,5)) //true
console.log(Object.is(+0,-0)) //false 
console.log(Object.is(+0,0)) //true
console.log(Object.is(-0,0)) //false
//隐式转换
console.log(2*'a') // NaN
console.log(parseInt('abc')) // NaN
console.log(parseInt('123abc')) // 123
console.log(parseInt('abc123')) // NaN
console.log(2+'a') // 2a
console.log(NaN === NaN) // false
console.log(Object.is(NaN,NaN))
console.log(isNaN(NaN),isNaN(parseInt('abc'))) 


