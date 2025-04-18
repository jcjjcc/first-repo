function Person(name){
    this.name = name
}
Person.prototype.name = 'wen'
const p1 = new Person('a')
const p2 = new Person('b')

console.log(p1 === p2)
console.log(p1.__proto__ === p2.__proto__)
console.log(p1.name,p2.name)