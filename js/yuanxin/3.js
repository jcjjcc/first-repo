function Person(name, age){
    this.name = name
    this.age = age
    console.log(this)
}

// 以前端方式运行，this指向window
Person('wen', 18)
// 以构造函数运行
const wen = new Person('wen', 18)



