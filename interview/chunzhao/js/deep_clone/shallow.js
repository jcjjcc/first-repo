


function clone(target) {
    if(typeof target === 'object' && target !== null){
        let cloneTarget = Array.isArray(target) ? []:{};
        for (const key in target) {
            cloneTarget[key] = target[key];
        }
        return cloneTarget;
    } else {
        return target
    }

};

// 测试
let obj = {a: 1, b: 2, c: {d: 3}};
let clonedObj = clone(obj);
clonedObj.c.d = 4; 
console.log(obj.c.d);//4 也被修改了

clonedObj.a = 5; 
console.log(obj.a);//1 没有被修改 互不影响

let a = clone('abc')
console.log(a) //abc
let b = clone(123)
console.log(b) //123
let c = clone(null)
console.log(c) //null
let d = clone(undefined)
console.log(d) //undefined