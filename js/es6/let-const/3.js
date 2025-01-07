const PERSON = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'traveling', 'hiking']
}

// Assignments to constant variables 
PERSON.hobbies.push('swimming');

console.log(PERSON); // { name: 'John', age: 30, hobbies: [ 'reading', 'traveling', 'hiking','swimming' ] }
