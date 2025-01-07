var a = 1;
var b = 4;
function foo() {
    var a = 2;
    function bar() {
        var a = 3;
        console.log(a); // 3
        return a + b;
    }
    console.log(a, bar()); // 2 7
    console.log(c); // ReferenceError: c is not defined
}

foo(); 
