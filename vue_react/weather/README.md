- 组件思维
- 切页面
 - 先写template{{占位数据}}
 - html5 语义化
 - BEM 命名
- BFC 基本概念 块级元素格式化上下文
  Block Formating Context
  - 浮动 float 用来实现两（多）列式布局方案
    float: left | right | 
  - 产生问题
    - 子元素离开了文档流，父元素高度塌陷(感知不到子元素的存在)
    - 后面的元素挤占nav的空间
  - 和position有区别   完全离开文档流
    float 没有完全离开文档流 ，影响周围的文字，形成了环绕效果
  - overflow: auto  给nav元素开启了一个BFC
    - 规则，BFC元素可以得到内部浮动元素的高度
    - 块级元素不等于BFC