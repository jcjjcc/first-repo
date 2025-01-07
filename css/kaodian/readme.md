## 层叠上下文

# 页面渲染规则

- 文档流
  body 开始从上到下，从左到右

- layout

- 盒模型 盒子(本身)大小
  box-sizing  border  padding  content
  盒模型  
   - 标准盒模型  content-box    weight 和 height 指的是 content 部分的大小
   - IE盒模型(怪异盒模型)  border-box  

- 认标签,但也可以转变 display
  块级元素 block
  行内元素 inline    不用于做盒子,不能设置宽高,宽高由内容决定
  块级元素为何默认宽度100%? 因为块级元素默认会独占一行,宽度100%可以充满父元素宽度
  html 是第一个BFC元素(默认的BFC,无需设置) body参与html的BFC
  页面显示由html负责   页面的布局  块级元素从上到下  行内元素从左到右  块级元素独占一行  行内元素在一行内排列


- display 

- BFC Block Formatting Context
  块级格式化上下文
  - html 是根元素,也是最顶级的BFC
  - context 

- 什么叫做格式上下文? Formating Context   我跟谁混
  - 为何弹性布局 打破了html的BFC的规则?
    - BFC不是某个元素的个例,  弹性布局, 创建了一个新的BFC
    - BFC不受外界影响,全新的、独立的渲染区域  
    - FFC  Flex Formatting Context 弹性布局的上下文
      flex-direction:row|column 
    - GFC 网格布局 
    - BFC 

# BFC 
  - html是最顶级的BFC
  - block level box 垂直方向，一个接一个的放置，且宽度100%
  - 盒子垂直方向的距离由margin决定，margin-top和margin-bottom分别设置上下边距
  同一个BFC的相邻盒子margin会发生重叠,大的说了算
  - 每个元素的margin左边,与包含块border的左边相接触,即使纯在浮动也一样
  - BFC 区域不会与float box重叠
  - 独立渲染区域，不受外界影响
  - 计算BFC的高度时,浮动元素也参与计算


  - 触发新的BFC
    - overflow:hidden|auto|    不为visible 水杯盛开水
    - 




  BFC和文档流?
   - 文档流 是所有元素默认遵循的布局模式，而 BFC 提供了一种机制，允许开发者通过创建独立的布局环境来更精细地控制某些元素的布局，解决特定的布局挑战。


   margin塌陷
   高度坍塌
   外边距折叠
   被浮动元素覆盖

   - 页面是平面的
     BFC 文档流 布局 盒模型 选择器 继承 层叠上下文··· 为渲染引擎像素（rgb 像素点）计算而服务的
     - z-index 越大越在上面 洋葱模型
     一层一层计算 叠加起来
     - 层叠上下文是HTML的三位概念 ，发生堆叠。z-index 受父元元素的影响。如果父元素小的话，子元素的z-index 就会失效。
     - html DOM树 浏览器解析程序的数据结构(树)
     - css cssOM树
     - DOM树 + cssOM树 = Render Tree  渲染树 ->布局(float，position，flex)->绘制(z-index)->合成(图层) ->渲染引擎画出来
     - z-index 太多了 ，性能不好
     - 父图层管着子图层

    - css三种写法
      - 行内样式  style="width:100px;height:100px;" 
        优先级最高 不要多用 不好维护
        :style="styleObject"  动态设置样式用这个
      - 内嵌样式(内部样式表)
        少用，不方便复用和管理
        影响页面加载速度
      - 外联样式
        好维护
        好复用
        模块化
        并发请求，提高性能  DOM可以提前和css结合，渲染，页面尽早出来
    - stylus
      css 预编译器
      浏览器还是只认css  先写styl  编译成css
      npm i -g stylus 全局安装 stylus
      stylus -w 文件名.styl -o 文件名.css 
      - 快 不用写{} 不用写 : ;
      - tab 缩进一下 选择器归属问题
      - stylus 让css更简洁，更高效，更强大



        内部样式表（Internal Style Sheet）
解析顺序：当浏览器遇到<style>标签时，会暂停HTML的解析，转而解析<style>标签内的CSS代码。解析完成后，再继续解析剩余的HTML文档。
解析方式：内部样式表的解析是同步的，即浏览器会等待CSS解析完成后再继续解析HTML。
        外部样式表（External Style Sheet）
解析顺序：当浏览器遇到<link>标签时，会立即发起对外部CSS文件的请求，并继续解析剩余的HTML文档。当CSS文件下载完成后，浏览器会暂停HTML的解析，转而解析CSS文件。
解析方式：外部样式表的解析是异步的，即浏览器不会等待CSS文件下载完成后再继续解析HTML。这意味着HTML解析和CSS文件下载可以并发执行，从而提高页面加载速度。
        总结
内部样式表的解析是同步的，会阻塞HTML的解析。
外部样式表的解析是异步的，可以与HTML解析并发执行。
因此，使用外部样式表可以提高页面加载速度，因为浏览器可以在下载CSS文件的同时解析HTML文档。而使用内部样式表时，浏览器需要等待CSS解析完成后才能继续解析HTML，可能会导致页面加载速度变慢。