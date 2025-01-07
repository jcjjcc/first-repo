# 面向 Openai 接口编程
- 多模态
  - 单模态
    chatgpt 文本
  - 图片、视频、音频

  - npm init -y 初始化项目
    npm install openai 安装    openai sdk
     - 时间  占用空间
      npm i -g openai 全局安装
      npm i -g pnpm 
      哪里去了？ 命令行直接调用 环境变量 ？ 污染全局


     - 既不会重复安装，也不会污染全局，符号链接区指向之前的安装
      时间快，省空间  pnpm 
  - main.mjs 主入口 单点入口的职责
    mjs es6  module import from 语法

  - 调试能力
    console.log(result) 查看它的 json 结构

  - 理解参数
    gpt4o  多模态读图能力
    - 文本指令
    - 图片地址
  - try catch  
    容错

  - key 不能提交到github
    资产的安全风险

  - npm -i dotenv  