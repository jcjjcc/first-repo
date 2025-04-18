const obj = {
    name: 'John',
    age: 30,
    city: 'New York',
    [Symbol.iterator]: function* () {
        const values = Object.values(this);
        yield* values;
    }
}
// const iterator = obj[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log([...obj])

// console.log({...obj, name: 'Jane'})

console.log(Object.keys(obj))