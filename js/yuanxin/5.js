function Person(name, age){
    this.name = name
    this.age = age
    // console.log(this)
}


const cy = {
    name: 'abc',
    paly: function(){
        console.log('play')
    }
}
console.log(Person.prototype)

//只要把函数的原型指向一个对象，每个实例都能访问这个对象的属性和方法
//
Person.prototype = cy
    
const wen = new Person('wen', 18)

wen.paly()