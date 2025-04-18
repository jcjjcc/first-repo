

// function clone(target) {
//     const map = new WeakMap()
//     function _clone(target) {
//         if (typeof target === 'object' && target !== null) {
//             let cloneTar = Array.isArray(target) ? [] : {}
//             if (map.has(target)) {
//                 return map.get(target)
//             }
//             map.set(target, cloneTar)
//             for (let key in target) {
//                 cloneTar[key] = _clone(target[key])
//             }
//             return cloneTar
//         } else {
//             return target
//         }
//     }
//     return _clone(target)
// }


function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

function clone(target,map = new WeakMap()){
    if(typeof target === 'object' && target !== null){
        const isArray = Array.isArray(target);
        let cloneTar = isArray? []:{}
        if(map.has(target)){
            return map.get(target) 
        }
        map.set(target,cloneTar)

        const allKeys = [
            ...Object.keys(target),
            ...Object.getOwnPropertySymbols(target)
        ]
        const keys = isArray? undefined : allKeys
        forEach(keys || target, (value,key) => {
            if(keys){
                key = value
            }
            cloneTar[key] = clone(target[key],map)
        })
        return cloneTar
    }else {
        return target
    }
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
  hobbies: ["reading", { hobby: "swimming"}],
};
obj.self = obj;

const clonedObj = clone(obj);
clonedObj.nested.age = 30;
console.log(obj.nested.age); // 25 不会被修改
console.log(clonedObj[sym]); // "symbol value" 可以访问到 symbol 类型的属性值
console.log(clonedObj[sym1]); // "symbol value" 可以访问到 symbol 类型的属性值
clonedObj.name = "Bob"; // 修改基本类型属性值不会影响原对象
clonedObj.hobbies.push("coding"); // 修改数组不会影响原对象
clonedObj.self.name = "Charlie"; // 修改对象属性值不会影响原对象
clonedObj[sym] = "new symbol value"; // 修改 symbol 类型属性值不会影响原对象
clonedObj[sym1] = "new symbol value"; // 修改 symbol 类型属性值不会影响原对象
// console.log(obj,clonedObj)

console.log(structuredClone(obj))

