// Symbol es6新增的数据类型 用于创建独一无二的值
//函数一样的外观 但是是个简单数据类型 
console.log(Symbol('马斯克'))
console.log(Symbol('马斯克') === Symbol('马斯克'))

const s1 = Symbol('name')
console.log([s1])
console.log(s1)