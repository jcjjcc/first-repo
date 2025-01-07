 # Vue哲学
   - 前端原始的年代
     - 开发思想
       底层API  DOM编程 + 事件机制
       缺点 复杂 
       性能差(频繁访问甚至修改DOM)  V8引擎优(JS ，单线程) + 渲染引擎(html + css)
       以快速显示页面为第一要务 html + css 渲染引擎独立于JS引擎
       V8引擎 独立的， v8 去到 渲染引擎，犹如上了高速，较远
       vue(登记)批量收集DOM更新，减少没必要的跑路



   - jquery
     js 框架 ,DOM 操作简单
     $('#id')等封装简化了js开发 (对开发者友好)
   - web 1.0(csdn blog) -> web 2.0(twitter facebook)
     JS 代码量增大，性能排在第一位




   - 演变到VUE + REACT 
     更关注于业务开发(数据，响应式，组件化)，屏蔽了DOM编程，不用在意JS DOM底层API，框架封装了
     数据思维 + Vue/React实现方式 = 前端开发
    

   - data title
   - vue提供给专注于业务的语法  v-model双向数据绑定
     - data title   input.value 使用


   - todos 应用
     - todos 数据项
     - title 任务
     -  @keydonw.enter  @event  vue事件监听
        .enter 事件修饰符  事件业务更快捷
     - 动态样式业务  
        :   v-bind的简写    动态绑定
        : class="{}"   {}者内部是JS 运行区域 
# 双向绑定
  


- title data
  {{title}} 数据驱动的界面
  input v-model="title" 双向绑定
  input 输入的时候,输入框的值改变了,跟数据项title不一样  
  @input 事件监听器,当输入框的值改变时,触发事件,将输入框的值赋值给数据项title 但是这样写太麻烦了
  所以vue提供了简写方式 v-model="title",专门解决数据双向数据绑定

- :class  :value ?
  动态绑定属性业务时用:v-bind 简写 :

- 数据与页面保持一致很重要

- all 所有任务的数量
  - all 与 title todos不一样, 后两个是独立的 
  - all则是依赖与数据项all的变化
  - computed 计算属性
    形式上是函数,返回的是值
  - 当计算属性依赖项发生变化时,会重新执行函数，得到新的值
  - 关注函数体内的数据项
  - 计算属性也是数据的一类
  - get set两种操作,数据属性的特质更明显

- 数据和界面状态的正确性
  - 数据驱动界面 {{}} 单项数据绑定 数据绑定界面
  - 双向绑定 v-model 
    - 先是**界面状态**发生改变
    - 数据要保持一致
    - v-model 修改数据
    - 状态一致
    - 依赖项的联动一致
      allDone true/false   todos 也得变

  - 不犯错误, 保证数据与界面状态的一致性
  - vue 2.0 让开发者 爽 专注于数据业务
    data
    method
    computed
    好处是简单,缺点是不够灵活
  - vue 3.0? 
    选项式API -> set up 组合式API  对应的data,method,computed 可以放一起 有利于大型项目(组件代码>100行)的维护





- 计算属性
  - 概念
  - 语法



- 思考
  - 计算属性与方法