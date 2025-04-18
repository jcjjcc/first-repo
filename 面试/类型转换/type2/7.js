console.log([1,2].toString())
console.log([1].toString())
console.log(['1'].toString())

console.log(Number([1,2].toString()))

console.log('---')
console.log([].valueOf())
console.log([1].valueOf())
console.log([].toString())

//二元运算符
console.log([]+ [])

//一元运算符
console.log(+[1,2,3])

console.log([] == [])

let x= 42
let y = {
  valueOf:function(){
    return 42 
  }
}

console.log(x == y)