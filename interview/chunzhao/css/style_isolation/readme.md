# 样式隔离
是指在**组件**开发中，确保每个组件的样式不会影响其他组件，避免全局样式污染。

- vue 中的样式隔离
  单文件组件（SFC） 
  一、scoped
  原理：
  当给 <style> 标签添加 scoped 属性后，Vue 编译器会做两件事：

  - 给组件的每个 DOM 节点添加一个唯一的 data-v-xxxx 属性。
  - 给样式规则添加对应的 [data-v-xxxx] 选择器，从而限制样式的作用范围。

  <div class="example" data-v-123456>
  <p data-v-123456>这是一个示例组件</p>
  </div>


    .example[data-v-123456] {
    background-color: lightblue;
    }

    p[data-v-123456] {
    color: white;
    }

二、vue也支持css module
原理：
CSS Modules 会将 CSS 类名编译成唯一的哈希值，从而避免全局命名冲突。在组件中，通过 $style 对象来引用这些编译后的类名。


- react 中的样式隔离
 一、css Modules
 二、styled-components


## 总结

样式隔离 在单组件文件中，实现样式隔离的方法有，避免样式污染。主要是通过属性选择器和动态类名来实现。vue中scoped,当然也支持module,还支持>>> deep 实现嵌套样式隔离。react通过引入module.css实现样式隔离，其中css in js 的styled-component 也可以实现样式隔离,并带来了样式组件的创意。
