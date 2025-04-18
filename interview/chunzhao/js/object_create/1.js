const personProto = {
    greet() {
        console.log('hello!')
    }

}

const person = Object.create(personProto);
console.log(person,person.__proto__)

const pureObject = Object.create(null);

//由于 pureObject 初始时没有任何属性，当你使用 . 操作符访问一个未添加的属性时，JavaScript 会尝试在对象自身查找该属性，因为 pureObject 没有原型链，不会去原型对象上查找，所以会直接返回 undefined。
console.log(pureObject,pureObject.__proto__)
console.log(pureObject.name)//undefined
console.log(Object.getPrototypeOf(pureObject)) //null



person.name = 'Max';
person.age = 30;

const person1 = {   
    name: 'Max',
    age: 30
}



console.log(person1.__proto__ === Object.prototype);
console.log(Object.prototype)

