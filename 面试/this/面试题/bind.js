Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.myBind - what is trying to be bound is not callable');
    }
    context = (context === null || context === undefined)? globalThis : Object(context);
    const fn = this;
    const bound = function (...innerArgs) {
        const allArgs = args.concat(innerArgs);
        // 判断是否通过 new 调用
        if (this instanceof bound) {
            // 如果是 new 调用，忽略传入的 context
            return new fn(...allArgs);
        } else {
            return fn.apply(context, allArgs);
        }
    };

    // 维护原型关系
    if (fn.prototype) {
        bound.prototype = Object.create(fn.prototype);
    }

    return bound;
};



function fn(a, b,c,d) {
    console.log(this, a, b,c,d)
    return a+b+c+d 
}

// const newFn = fn.myBind('ctx', 1, 2)
// console.log(newFn(3,4))
// const p1 = new newFn(3,4)
// console.log(p1)



const bar = fn.bind('ctx', 1, 2)
console.log(bar(3,4))
const p2 = new bar(3,4)
console.log(p2)
