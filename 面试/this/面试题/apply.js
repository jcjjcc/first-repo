Function.prototype.myApply = function (context, args) {
    // 检查调用 apply2 的对象是否为函数，如果不是则抛出类型错误
    if (typeof this !== "function") {
        throw new TypeError("Caller is not a function"); 
    }
    // apply 方法的第二个参数 args 必须是数组类型
    if (!Array.isArray(args)) {
        throw new TypeError("The parameter must be an array");
    }
    // 如果 args 未传入或者为 null、undefined，则将其设置为空数组
    args = args || [];
    // 处理 context 参数，如果 context 是 null 或 undefined，则将其设置为全局对象；否则将其转换为对象类型
    context = (context === null || context === undefined)? globalThis : Object(context);
    // 创建一个唯一的 Symbol 作为临时属性名，避免与 context 对象已有属性名冲突
    var key = Symbol('temp');
    // 将当前调用 apply2 的函数赋值给 context 对象的临时属性
    context[key] = this;
    try {
        // 调用 context 对象上的临时函数，并将 args 数组展开作为参数传入，返回函数执行结果
        return context[key](...args); 
    } finally {
        // 无论函数执行是否成功，都删除 context 对象上的临时属性，避免污染对象
        delete context[key]; 
    }   
}

function method(a, b) {
    return a + b + this.c
}
const obj = {
    c: 3 
}
// const res = method.myApply(obj, 1, 2, 3)
// console.log(res)

const res2 = method.apply(null, 1, 2, 3)
console.log(res2)