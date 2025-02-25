ollama run deepseek-r1:1.5b
## chatbot
- 后端：server.js
  npm init -y
- Koa 是一个由 Express 原班人马打造的轻量级 Node.js Web 框架 简单来说就是node最简单的后端框架
  npm i koa  
  const koa = require('koa');
  const app = new koa();//实例化
- 安装路由
  npm i koa-router
  const Router = require('koa-router');
  const router = new Router();//实例化一个路由管家
- 使用路由
  app.use(router.routes())
- 安装 axios
  npm i axios
  const axios = require('axios');
- nodemon 是一个可以自动重启node服务的工具
  npm i nodemon 
  nodemon server.js