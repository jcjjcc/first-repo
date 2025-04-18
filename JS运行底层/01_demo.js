var name = "John";
var age = 31;


/**
 * 1.代码被解析，在源代码被解析成AST时，v8引擎内部会帮我们创建一个对象（GO）
 * 2.运行代码
 *    2.1  v8为了执行代码，引擎会创建一个执行上下文栈(EC)(函数调用栈)
 *    2.2  进入全局代码，创建一个全局执行上下文(GEC )并将其推入执行上下文栈
 */
var globalObject = {
    String:'类',
    Date:'类',
    Number:'类',
    Array:'类',
    name: undefined,
    age: undefined,
    window: this,//（指向了自身globalObject）
}