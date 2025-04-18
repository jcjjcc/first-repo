console.log(1+'1')

console.log(+'1')

console.log(+[])//0

console.log(+{})//NaN

console.log(+['1'])//1
console.log(+['1,23,2'])//NaN

console.log([] + {})//[object Object]

console.log({} + {}) //[object Object][object Object]

console.log(42 == ['42'])

console.log(true == '2')



console.log('-----')

console.log(+'abc') //NaN
console.log(-'abc') //NaN
console.log(+true) //1
console.log(+[])//0
console.log(+{})//NaN


console.log([] == []) //false

function foo(){}
const bar = foo
console.log(foo == bar) //true

