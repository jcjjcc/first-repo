
let key = Symbol('key')
const obj = {
    undef: undefined,
    nul: null,
    fun: function () { },
    num: 123,
    str: 'abc',
    sym: Symbol('sym'),
    [key]: 'value'
  };

// console.log(JSON.parse(JSON.stringify(obj)))
// console.log(obj[key])
// console.log(obj['nul'])
// console.log(obj['num'])
// console.log(obj['fun'])
// for(let i in obj){
//     // console.log(typeof i)//都是string
//     console.log(obj[i])
// }

// console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))

console.log(typeof new Map())
console.log(typeof new Set())