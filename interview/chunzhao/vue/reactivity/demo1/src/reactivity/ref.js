import {track, trigger} from './effect'
import { reactive } from './reactive'
import { isObject } from '../shared'

export function ref(val){
    if(isRef(val)){
        return val
    }
    return new RefImpl(val)
}

//最轻量级的拦截器 class 的 get set

export function isRef(val){
    return !!(val && val.__isRef) 
}
 
 

class RefImpl {
    constructor(val){
        //私有
        this.__isRef = true
        this._val = convert(val)
    }

    get value(){
        track(this,'get','value')
        return this._val
    }

    set value(val) {
        if(this._val !== val){
            this._val = convert(val)
            trigger(this,'set','value')
        }
    }

}

function convert(val) {
    return isObject(val) ? reactive(val) : val
}