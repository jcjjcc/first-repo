function Person(name, age){
    this.name = name
    this.age = age
    console.log(this)
}
// 每个函数都有一个原型对象 prototype
Person.prototype = {
    say: function(){
        console.log('hello')
    }
}

const wen = new Person('wen', 18)
wen.say()
console.log(Person.prototype)
console.log(wen.__proto__)