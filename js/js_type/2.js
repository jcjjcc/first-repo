let person = {
    name: "John",
    age: 30,
    city: "New York"
}
let person1 = person

let a = 1
let b = a


b = 3
person1.age = 35

console.log(a,b)
console.log(person,person1)
