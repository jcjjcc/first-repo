/**
 * 
 * 
 */





let activeEffect = null; // 当前effect 
// targetMap 记录着普通对象的属性被谁依赖着
const targetMap = new WeakMap(); // 弱引用 依赖收集 ？ 当前对象的依赖 
// 闭包
export function effect(fn) {
  // 返回一个函数
  // 立即执行一次
  // console.log(fn, '/////');
  const effectFn = () => {
    try {
      activeEffect = effectFn
      // 执行fn 函数
      //// fn()中有读取属性的操作，会触发get，会触发track，会把当前的 activeEffect收集起来，activeEffect 就是当前的effectFn
      return fn() 
    } finally {
    //   console.log('依赖收集完毕，我会把activeEffect置为null');
      activeEffect = null;
    }
  }
  effectFn() // 立即执行
  return effectFn
}

export function track(target, type, key) {
//   console.log('触发 track')
  
  //depsMap 键：target的属性 值：set set里面放的是effect
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map(); 
    targetMap.set(target, depsMap);   
  }
  // deps就是值：是一个set set里面放的是effect中的fn
  let deps = depsMap.get(key);
  if (!deps) {
    deps = new Set(); // 不要重复添加  
  }
  if(!deps.has(activeEffect) && activeEffect) {
    deps.add(activeEffect);
  }
  depsMap.set(key, deps);
  

}


export function trigger(target, type, key) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const deps = depsMap.get(key);
    if (!deps) {
      return;
    }
    console.log(targetMap);
    //用forEach 遍历set，执行里面的函数effectFn
    deps.forEach((effectFn) => {
      effectFn()
    })
  }
  
  