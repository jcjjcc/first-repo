# vue hooks 编程

- react 的  hooks 编程 vue直接抄
- 从vue 功能 -> 组件思维

- 内存泄漏 重要
  不会主动取消事件监听，组件销毁，事件处理函数无法回收
- 生命周期  v-if 组件卸载前打扫内存战场

- es6 模块化
  - import from 'xxx' 引入
    import Obj from './Obj.js'     export default Obj 默认输出的对象   
    import { func1, func2 }    export
  - export  导出
- hooks 编程风格
  - 函数式编程
   useMouse use开头 hooks函数的特征
  - 将响应式业务 和 UI 分离开来
  - 让组件更好维护， 复用性高
  - UI 组件开发工程师
  - 组件拆分为 UI界面 和 业务逻辑
- 组件 = UI + State(hooks)




数据 ：

方法 ：

打量的数据和方法都混在一起，不利于维护，不易于复用，不易于扩展，不易于测试，不易于理解。

hooks 编程风格：数据和方法贴在一起，并且以模块化思想加持
？？.js/??.ts 模块化思想
命名有讲究  use开头  后面具体的功能
把数据和功能包在一个函数里，并暴露出去

useSum 所有的功能和方法都在这
useMouse