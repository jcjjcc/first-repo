import {
    mutableHandlers,
    shallowReactiveHandlers
} from './baseHandlers'
// 依赖地图 Map es6新增的数据结构 
// 与json的区别 json的key只能是字符串 map的key可以是对象
export const reactiveMap = new WeakMap()
export const shallowReactiveMap = new WeakMap() //浅的依赖

//大型项目 响应式对象很多 但是reactiveMap只有一个 性能？
// 不会对性能造成影响  垃圾回收机制 WeakMap 弱引用键值 当键没有被引用的时候 会被垃圾回收机制回收
// target 普通对象
export const reactive = (target) => {
    // console.log(target)

    //返回一个代理对象
    return createReactiveObject(target, reactiveMap, mutableHandlers);
}

export const shallowReactive = (target) => {
    return createReactiveObject(target, shallowReactiveMap, shallowReactiveHandlers);
}

function createReactiveObject(target, proxyMap, proxyHandlers){
    if(typeof target !== 'object'){
        console.warn('reactive必须是一个对象')
        return target
    }
    
    const existingProxy = proxyMap.get(target)
    if(existingProxy){
        // console.log('已经代理过了')
        return existingProxy //直接返回代理对象
    }

    const proxy = new Proxy(target, proxyHandlers)
    proxyMap.set(target, proxy)
    return proxy
}


/**
 * reactiveMap 记录被代理过的普通对象 和 与之对应的代理对象 之间的映射关系
 * 1.避免重复代理，节省内存
 * 2.垃圾回收 弱引用，当普通对象没有被引用的时候，该普通对象和其代理对象会被清理
 */