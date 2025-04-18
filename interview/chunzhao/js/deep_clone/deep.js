
function clone(target){
    if(typeof target === 'object' && target !== null){
        let cloneTar = Array.isArray(target)? []:{}
        for(let key in target){
            cloneTar[key] = clone(target[key])
        }
        return cloneTar
    }else {
        return target
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    field5: function(){
        console.log('hello')
    }
};

let clonedObj = clone(target)
clonedObj.field4.push(10)
clonedObj.field3.child = 'hello'
clonedObj.field1 = 10
clonedObj.field5.key = 'hello'
console.log(target,clonedObj)
console.log(target.field5.key)
