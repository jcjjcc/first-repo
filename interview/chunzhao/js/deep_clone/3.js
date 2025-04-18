function clone(target, map = new WeakMap()) {
    if (target === null || typeof target !== 'object') {
        return target; // 基本类型直接返回
    }

    // 特殊对象处理
    if (target instanceof Date) {
        return new Date(target);
    }
    if (target instanceof RegExp) {
        return new RegExp(target);
    }
    if (target instanceof Map) {
        const cloneMap = new Map();
        target.forEach((value, key) => {
            cloneMap.set(key, clone(value, map));
        });
        return cloneMap;
    }
    if (target instanceof Set) {
        const cloneSet = new Set();
        target.forEach(value => {
            cloneSet.add(clone(value, map));
        });
        return cloneSet;
    }

    const isArray = Array.isArray(target);
    let cloneTarget = isArray ? [] : {};

    // 处理循环引用
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);

    // 合并普通属性和 Symbol 属性的遍历
    const allKeys = [
        ...Object.keys(target),
        ...Object.getOwnPropertySymbols(target)
    ];
    for (const key of allKeys) {
        cloneTarget[key] = clone(target[key], map);
    }

    return cloneTarget;
}

const sym = Symbol("key");
const sym1 = Symbol("key1");
const obj = {
    [sym]: "symbol value",
    [sym1]: "symbol value1",
    name: "Alice",
    nested: {
        age: 25
    },
    date: new Date(),
    regex: /abc/,
    map: new Map([["key", "value"]]),
    set: new Set(["value"])
};
obj.self = obj;
obj.map.set("key", obj);

const clonedObj = clone(obj);
clonedObj.nested.age = 30;
clonedObj.date.setDate(clonedObj.date.getDate() + 1);
clonedObj.map.set("newKey", "newValue");
clonedObj.set.add("newValue");

console.log(obj.nested.age); // 25 （未被修改）
console.log(clonedObj[sym]); // "symbol value" （正确复制）
console.log(clonedObj.date !== obj.date); // true （日期对象被深拷贝）
console.log(clonedObj.map.get("newKey")); // "newValue" （Map 被深拷贝）
console.log([...clonedObj.set]); // ["value", "newValue"] （Set 被深拷贝）
console.log(obj,clonedObj)