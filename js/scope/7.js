
function foo() {
   b = 2;  //LHS 默认声明变量
}
foo();
// LHS b 全局
console.log(b); 


function foo1() {
    var c = 2;
}
foo1();
console.log(c); // ReferenceError: c is not defined

/*
"use strict";
在严格模式下，
*/