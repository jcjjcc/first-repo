# 显示类型转换和隐式转换
- String  Number Boolean 函数运行 强制类型转换
- 构造函数 new  
- Primitive  怎么转对象

- 对象转Primitive 

- 包装类 
  "abc".length
  "1.23".toFxied(1)
  new String("abc") new Number(1.23)
  JS 一切面向对象 自动帮我们包装一下简单数据类型
  叫做包装类

- 对象转Primitive   Object => Primitive 
  - Boolean 任何对象都转成true
  - String
    toString() 
     - Object.prototype.toString.call({a:1})  "[Object Object]" 确切类型
     - 数组， 调用原型上的toString方法
     - 函数 返回源代码 
     - 日期
  - Number
     先调用valueOf() 如果是原始值 就返回  就变成了原始值转number
     否则，调用toString() 返回一个原始值 也变成了原始值转number
     若连续调用两次都不是原始值 就报错

  - Object => String|Number
    - toPrimitives 是使命
    - 