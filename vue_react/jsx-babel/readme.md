# react JSX

- es6代码 很老的浏览器不支持
  const => var
  转换一种形式
  babel技术
  es6 => es5
- stylus
  .styl =>.css
- JSX =>原生js执行的代码

- babel
 - es6 能够快速到来的，得益于babel工程化转译工具
 - 前端工程化 vite/babel/webpack/stylus
 - vite 工程总负责，babel其中的代码转译的一员
 - babel家族
  - babel-core 核心转译器  const => var
  - babel-cli 命令行工具  npx babel src -d lib
  - babel-preset-env 配置专业规则
    presets 预处理 
  - npx babel demo.js -o es5.js
    npx 不用安装 直接执行某个包
    如果已经安装，npx 找到 bin 目录下的 babel-cli 直接执行，node_modules/.bin/babel
  - babel/core 核心的转译器
  - .babelrc 配置文件
    presets 预处理
    {
      "presets": ["@babel/preset-env"]
    }