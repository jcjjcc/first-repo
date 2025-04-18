// 和普通函数的区别
// 构造对象的过程 构造函数 constructor
function Person(name, age){
    this.name = name
    this.age = age
}
//首字母大写，以new的方法调用
const wen = new Person('wen', 18)
console.log(wen)
