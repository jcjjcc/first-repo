import { track, trigger} from './effect'
import { isObject } from '../shared'
import { reactive } from './reactive'
// 代理对象的拦截操作
// get obj, key  effect -> track  依赖地图中

function createGetter(shallow = false) {
  // 可读性
  return function get(target, key, receiver) {
    // console.log('触发了 get');
    // 收集依赖
    track(target, "get", key);
    let res = target[key]
    // 如果是对象 递归代理
    if(isObject(res)) {
      return shallow ? res : reactive(res);
    }
    return res;
    // return target[key];
  }
}
function createSetter() {
  return function set(target, key, value, receiver) {
        
    const result = Reflect.set(target, key, value, receiver);
    // console.log(result)
    trigger(target, "set", key);
    return result
  }
}

function has(target, key) {
  const res = Reflect.has(target, key);
  track(target, "has", key);
  return res;
}


const get = createGetter();
const set = createSetter();
const shallowReactiveGet = createGetter(true);

export const mutableHandlers = {
  // 拦截那些行为
  get,
  set,
  // has,
}

export const shallowReactiveHandlers = {
  get: shallowReactiveGet,
  set,
}