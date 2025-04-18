function clone(target,map = new WeakMap()){
    if(typeof target === 'object' && target !== null){
        let cloneTar = Array.isArray(target)? []:{}
        if(map.has(target)){
            return map.get(target) 
        }
        map.set(target,cloneTar)
        for(let key in target){
            cloneTar[key] = clone(target[key],map)
        }
        return cloneTar
    }else {
        return target
    }
}