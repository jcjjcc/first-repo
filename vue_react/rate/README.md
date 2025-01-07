![](https://static001.geekbang.org/resource/image/0e/39/0e922d413eeeac4378233baa254dd039.png?wh=1406x544)

# Vue组件设计，提供API支持

- 页面的layout 和 设计稿 
- 组件树
- 页面由组件构成，组件是开发的单元
  - 组件设计 最重要 
  - 组件可以复用，向积木一样，随便组合，提高开发效率

- Vue 为组件提供了哪些聚焦业开发的API？
  - style scoped
  - 不会污染全局(组件太多了，不能搞破坏)
  - 当前组件会生成一个随机数，属性选择器
  - 写的代码，会添加这个属性选择器
- 在父子组件间传递数据时， v-bind:value="score" 传参  props
   子组件内部要用到的score应该和父组件的score数据绑定