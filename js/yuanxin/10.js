//组合继承 (伪经典继承)
//父类构造函数执行了两次
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

Sub.prototype = new Super()

const s1 = new Sub()
const s2 = new Sub()
s1.arr.push(4)
console.log(s1.arr) 
console.log(s2.arr)