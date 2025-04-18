
Object.create2 = function(proto,properties = undefined){
    if(typeof proto !== 'object' && typeof proto !== 'function'){
        throw new TypeError('Object prototype may only be an Object: ' + proto); 
    }
    if(properties === null){
        throw new Error('This browser\'s implementation of Object.create is a shim and doesn\'t support null first argument.') 
    }

    function F(){}
    F.prototype = proto;
    const obj = new F(); 
    if(properties !== undefined){
        Object.defineProperties(obj,properties); 
    }
    if(proto === null){
        obj.__proto__ = null;
    }
    return obj;
}