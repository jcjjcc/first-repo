# 作用域

- 通过一句 var a = 1 ; 了解JS的执行机制
   - 声明 + 赋值语句
   - a 变量存在哪里？内存中
   - 编译阶段   var 变量声明的关键字
   - a 变量标识符

- var a;//编译阶段
  a = 1;//执行阶段

## 变量
  - 作用域
    变量不会单独存在，属于一个作用域(编译阶段)
    作用域是变量的查找规则，首先在当前作用域查找，如果没有找到，就向上一级作用域查找，
    一直冒泡，直到全局作用域，还没找到——未定义(执行阶段)

  var a = 1;   哪些东西为它工作
  - JS 引擎  chrome v8 引擎 CEO
    负责整体工作
  - 编译器 CTO
     var   a    =   1 分词
  - 作用域 COO 运营经理
     变量属于作用域
     作用域链
  
  - var a = 1;
  按编译和执行分为var a; 变量属于作用域 词法作用域
  a = 1; 查找a 的过程 遵守作用域的规则 当前作用域->外层...->全局 ->没找到 停下来 未定义  找到了，立马停下来

  - undefined 未定义
    js 数据类型之一 类型未定义
    js 弱类型语言  类型由值决定

  - var a = 1;
   引擎是如何领导编译器和作用域查找变量a的？
   a = 1 赋值操作 a 在等号的左边  LHS 
   查找分成 LHS 和 RHS 左 右
   a = b + 2
   - LHS 容器 赋值操作的目标
     RHS retrive his sourde value 取值
     console.log(a) RHS
   - LHS 引用用于找到变量的容器并对其赋值，而RHS引用用于获取变量的值

   - 作用域嵌套
     作用域链
      当前作用域->查找到全局的过程就是作用域链
      查找路径就是作用域链