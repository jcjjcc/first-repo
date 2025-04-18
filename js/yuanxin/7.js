function Person(){
    this.name = 1
}
Person.prototype.age=2
const p1 = new Person()
// console.log(p1.__proto__)

// console.log(Person.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__)//null 已经到了顶层
console.log(p1)
Object.prototype.sex = '男'
/*
p1 {
    name:1
    __proto__: Person.prototype = {
        age:2
        __proto__: Object.prototype = {
            sex:'男'
            __proto__:null
        }
    }
}  

*/
console.log(p1.name)
console.log(p1.age)
console.log(p1.sex)