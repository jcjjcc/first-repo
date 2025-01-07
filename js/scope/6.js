// ReferenceError: b is not defined
// RHS查找失败的时候，会爆出 ReferenceError 错误
function foo(a) {
   console.log(a+b);
    var b = a;
}
foo(2);
