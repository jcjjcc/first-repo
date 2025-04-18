//创建对象  Object.assign

const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };

const res = Object.assign(target, source1);

console.log(res); // { a: 1, b: 3, c: 4 }
//target 被修改了，不合理
console.log(target); // { a: 1, b: 3, c: 4 }

console.log(res.__proto__.__proto__)
//所以在前面加个空对象

const target1 = { a: 1, b: 2 };
const source2 = { b: 3, c: 4 };

const res1 = Object.assign({}, target1, source2);

console.log(res1); // { a: 1, b: 3, c: 4 }
console.log(target1); // { a: 1, b: 2 }

