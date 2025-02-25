

const koa = require('koa');
const app = new koa();//实例化
const Router = require('koa-router');
const router = new Router();//实例化一个路由管家
const axios = require('axios');
const bodyParser = require('koa-bodyparser');
app.use(async (ctx, next) => {
  // console.log('请求进来了')
   //设置响应头
   ctx.set('Access-Control-Allow-Origin', '*');
   ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
   ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie');
   if (ctx.method === 'OPTIONS') {
      ctx.status = 204;
      return;
   }

   await next();


})



app.use(bodyParser())
//注册一个路由
//method :post   url : /chatai
//前端axios 向 /chatai 发送post 请求
//后端再向 ollama ：11434/api/chat 发送post 请求
router.post('/chatai',async(ctx)=>{
    //message 前端传过来的数据，指的是提问的内容
    // console.log(ctx.request.body)
    // console.log(ctx.request.body.message)
    const message = ctx.request.body.message;
    const data = {
        model: "deepseek-r1:1.5b", 
        messages: [
            {
                role: "user",
                content: message
            }
        ],
        stream: false
    }
    
    const response = await axios.post("http://localhost:11434/api/chat",data)
                                // .then(res=>{
                                //     //console.log(res)
                                //     // console.log('1:',res.data)
                                //     ctx.body = {
                                //       code:200,
                                //       message:res.data.message.content
                                //   }
                                // })
    ctx.body = {
        code:200,
        message:response.data.message.content
    }
})



app.use(router.routes())
app.listen(3000,()=>{
  console.log('server is running at port 3000')
})
