
console.log('hello' + 1) //hello1
console.log('hello' + undefined) //helloundefined
console.log('hello' + NaN) //helloNaN
console.log('hello' + null) //hellonull
console.log('hello' + 'world') //hello world
console.log('hello' + true) //hellotrue


console.log(1 + null) //1
console.log(1 + undefined) //NaN
console.log(1 + NaN) //NaN
console.log(1 + true) //2

console.log([]+ 1 ) //
function f(){}
console.log(f + 1) //function f(){}1
console.log([]+[]) //空字符
console.log({}+{}) 
console.log({
    valueOf:function(){
        return 1
    },
}+{
    valueOf:function(){
        return 2 
    }
}) //3

console.log({
    toString:function(){
        return {}
    },
}+{
    toString:function(){
        return {}
    }
}) //TypeError: Cannot convert object to primitive value