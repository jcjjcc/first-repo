Function.prototype.myCall = function (context, ...args) {
    // 判断调用myCall的是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Caller is not a function");
    }
    // 如果 context 为 null 或 undefined，则将其设置为全局对象，否则将其转换为对象类型
    context = (context === null || context === undefined) ? globalThis : Object(context);
    // 创建一个唯一的 Symbol 作为临时属性名
    var key = Symbol('temp');
    // 使用 Object.defineProperty 方法将当前函数（即调用 myCall 的函数）添加到 context 对象上
    // 并设置该属性不可枚举，避免在遍历对象时被访问到
    Object.defineProperty(context, key, {
        // 属性的值为当前调用 myCall 的函数
        value: this,
        // 设置该属性不可枚举
        enumerable: false
    });
    try {
        // 调用 context 对象上的临时函数，并传入参数，返回函数执行结果
        return context[key](...args);
    } finally {
        // 无论函数执行是否出错，都删除 context 对象上的临时属性，避免污染对象
        delete context[key];
    }
};

function method(a, b) {
    console.log(this.c, a, b)
    return a + b + this.c
}
const obj = {
    c: 3
}
const res = method.myCall(obj, 1, 2)
console.log(res)

