// commonjs
// node 最简单的后端框架
const koa = require('koa');
// 实例化
const app = new koa(); // 也是应用
const Router = require('koa-router'); // 路由
const router = new Router(); // 实例化
const axios = require('axios'); 
const bodyParser = require('koa-bodyparser');
//跨域支持
app.use(async (ctx, next) => {
  console.log('this is a middleware');
  //
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie');
  if (ctx.method === 'OPTIONS') {
    ctx.status = 204;
    //return 语句用于立即退出当前中间件函数，
    //不再执行后续代码。这意味着一旦确定请求是 OPTIONS 请求，
    //并且已经设置了适当的响应状态码，
    //就不再需要继续执行其他逻辑。
    return;
  }

  await next();
})

app.use(bodyParser())
// 新建 / 路由
router.get('/', async (ctx) => {
  // 响应体
  // ctx 这一次请求响应的上下文
  ctx.body = `
    <html>
      <head>
        <title>chatbot</title>
      </head>
      <body>
        <h1>chatbot</h1>
      </body>
    </html>
  `;
})

// 新建一个叫做 chatai 的路由 
//  method, url 
// post 
// 后端 api 接口数据 json 
// nest.js 
// 前端react axios 向 /chatai 发送post 请求
router.post("/chatai", async (ctx) => {
  // 前端 input 传过来的内容 message 
  // 向ollama ：11434/api/chat 发送 post 请求
  // chatgpt 行业标准
  const message = ctx.request.body.message || 'hello';
  const data = {
    model: "deepseek-r1:1.5b", // 必须制定
    messages: [
      {
        role: "user",
        content: message
      }
    ],
    stream: false
  }

  // axios 发送请求就用它 转发请求
  // AI 能力集成
  const response = await axios
    .post("http://localhost:11434/api/chat", data)
    .then(response => {
      console.log(response.data.message.content);
      ctx.body = {
        code: 200,
        content: response.data.message.content
      }
    })


 
})
// 路由的挂载app
app.use(router.routes())

app.listen(3000, () => {
  console.log("server is running at port 3000");
})