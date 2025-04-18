
'use strict'
console.log(this)
console.log(global)
console.log(this === global)
console.log(this === module.exports)

console.log('-----')
function logThis() {
    console.log(this)
    console.log(this === global)

}
logThis()