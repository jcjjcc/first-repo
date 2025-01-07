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