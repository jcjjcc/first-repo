//手写new


function Person(name,age){
    this.name = name;
    this.age = age; 
}

function myNew(Constructor,...args){
    const obj = Object.create(Constructor.prototype)
    const result = Constructor.apply(obj,args)
    return (result && typeof result === 'object')?result:obj
}