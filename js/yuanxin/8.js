//原型链继承
function Super(){
    this.a = '111'
    this.arr = [1,2,3]
}

Super.prototype.say = function(){
   console.log('222') 
}

function Sub(){
    
}
//原型链继承的关键
Sub.prototype = new Super()

const s1 = new Sub()

// s1 -> Sub.prototype (new Super) -> Super.prototype -> Object.prototype -> null
console.log(s1.a) //111
s1.say() //222

//原型链继承的缺点
//1.引用类型的属性被所有实例共享
const s2 = new Sub()
s1.arr.push(4)
console.log(s1.arr) //[1,2,3,4]
console.log(s2.arr) //[1,2,3,4]
