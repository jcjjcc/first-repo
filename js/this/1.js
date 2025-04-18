"use strict"
var x = 2 
var obj = {
    x :1,
    foo:function(){
        console.log(this)
        console.log(this.x)
    }
}
//obj.foo是一个引用，指向函数foo
var foo = obj.foo;
var obj2 = {
    x:5,
    foo:foo
}
//相同点，同一个函数在运行
//不同点：被谁调用，调用的位置不同
//对象的方法被调用
obj.foo()
obj2.foo()
//普通函数调用

foo()