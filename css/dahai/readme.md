# cssd 底层基础
- 何为css?
```css
/*css rules*/
h1 {/** 选择器 **/
    color: red;/* 声明*/
    text-align: center;/** 声明 **/
}
```
- css? 层叠样式表(Cascading Style Sheets)
  - 依赖于html DOM      同时html DOM也不能裸奔 
  - css 选择DOM元素，运用样式规则
    - style 内联样式
    - link 外联样式
    - 行内样式 <p style="color:red;"> 行内样式 </p>

    先下载样式 再解析DOM 应用样式
    dom + css = render tree(显示页面 数据结构)   -》浏览器渲染引擎 -》渲染得到页面

- 优先级
  - 从小到大  
  - 计算规则
    *10
    标签 1 类名 10 id 100   行内 1000  !important 最大
  - 当选择器比较复杂的时候 优先级加法
    .container ul li:nth-child(odd) 22
    一定选择最后的元素 
    id是唯一的 css去选择BOM对象时最快


- css 选择器分为哪几类
  - 基础选择器
    - 标签选择器
    - 类选择器
    - ID选择器
    - 通配符选择器 * 性能不好
  - 组合选择器
    - 后代选择器 空格
    - 子代选择器 >
    - 相邻兄弟选择器 +
    - 普通兄弟选择器 ~

  - 伪类选择器
    伪类?  
  - 伪元素选择器
    伪元素?
  - 属性选择器
  - 伪类和伪元素的区别
    - 伪类是根据元素的状态来选择元素，如:hover,active,focus等
    - 伪元素是根据元素的位置来选择元素，如::before,::after等