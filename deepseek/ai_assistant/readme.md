# AI Assistant 全栈项目
 - 设计模式
    - 大前端 mvvm
      model （数据状态，useState，ref/reactive，api/axios接口，pinia）
      model 模型层 = 数据定义 + 数据处理 + 数据存储 + 数据请求 + 数据管理
      view 视图层 = component 组件 在views或components文件夹下
      vm 视图模型层 = 数据绑定{} {{}} 数据驱动页面 （v-if/v-for/v-show）...  事件监听 
    - 后端 mvc
      model 数据库独立于后端
      view 视图层
      controller 控制器层 

## 项目准备
  - 安装python
  - 配置虚拟环境
    本地项目依赖不受全局环境影响，可以更好的管理项目依赖
    项目下有了单独的项目依赖包  python -m venv 【ai_assistant】
    激活虚拟环境  windows: .\ai_assistant\Scripts\activate
  - 安装依赖包
    pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/

    Flask 是一个轻量级的 Python Web 开发框架，它可以帮助你快速开发 Web 应用。
    
    openai 

  - 没有前后端分离 mvc 开发模式
    - 前端在 static 文件夹下
    - 路由 / 显示index.html

  - 静态文件
    - js/css/img  FE
    - 启动静态文件服务

  - 状态码
    1xx 
    2xx
    3xx
    4xx
    5xx
    响应头是第一个数据包 浏览器或程序 就通过状态码知道后续处理逻辑
    
  - env
    - 环境变量

## 界面

- html 结构
  - 写注释
  - 图标字体库 font-awesome iconfont
    - 性能优化
    - 小图标都用图片，http 请求数的暴涨，网页同时并发请求数是有上限的
    - 下载一个图标字体文件 
    - fas fa-comment-alt  
    - font-awesome 不提供选择， 都是一样的 
  - css 样式的组合 面向对象特性 多态 方便复用和维护
    tailwindcss 原子类
  - textarea LLM 支持比较多的tokens 出入长度 kimi deepseek
  - 语义化标签
- css 
  - 弹性布局
    - 居中
    - flex-direction: row|column
    - align-items 纵轴
    - justify-content 横轴 flex-start space-between 
  - grid 布局
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap 24px
  - 响应式布局
    width max-width 
    @media screen and (max-width: 768px) {}
     - transition animation 
    - width transition ipad 旋转屏幕
    - transition: 多个属性分别设置
  - 面向对象思想
    - 封装 多态 继承
    - button 样式组件 基础样式
      UI风格 antd 
    - 组合业务样式
      primary secondary default -> tailwindcss 原子类
  - calc
    CSS中执行简单的数学运算,用于动态布局设计中精确控制元素大小与位置。
    性能有一点的问题， 不能滥用， 涉及不必要的重绘重排
  - flex: 1;
    flex-grow 1 其他子元素没有设置， 主元素，其他元素占完后，剩下的都归他来grow ; 多个子元素都设置 按比例划分。
    flex-basis
    flex-shrink

## 业务
  - 界面业务
    - grid布局
    - transition
    - css 面向对象
  - scrollToTop 业务







  json js事件级别 事件委托 事件冒泡 事件流
  forEach 