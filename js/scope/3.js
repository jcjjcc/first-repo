// function foo() {
//     var a = 1;
//     // var a 会被忽略
//     var a = 2;
//     console.log(a); // 2
// }

function foo() {
    var a;
    var a;//会被忽略
    a = 1;
    a = 2;//覆盖之前的1
    console.log(a); // 2
}
foo()