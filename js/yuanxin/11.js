//寄生组合继承 (经典继承)
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

// Sub.prototype = new Super()
//直接继承父类的原型
Sub.prototype = Object.create(Super.prototype)

const s1 = new Sub()
const s2 = new Sub()