//构造函数继承

//原型链继承
function Super(){
    this.arr = [1,2,3]
}

Super.prototype.say = function(){
   console.log('222') 
}

function Sub(){
    // this.arr = [1,2,3]
    Super.call(this)
}

const s1 = new Sub()
const s2 = new Sub()
s1.arr.push(4)
console.log(s1.arr) //[1,2,3,4]
console.log(s2.arr) //[1,2,3]

//构造函数继承的缺点
//1.不能访问原型属性/方法
// s1.say()