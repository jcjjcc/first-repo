function foo(){
    let a = 10
    let b = 20
    function bar(){
        debugger
        console.log('bar',a,b)
    }
    return bar
}
let fn = foo()
fn()

//闭包是有两部分组成的：函数 + 函数可以访问的自由变量