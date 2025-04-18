const Koa = require('koa');
const websocket = require('koa-websocket');
//基于http协议构建websocket 服务
const app = websocket(new Koa());
//es6 提供的新的数据结构

const clients = new Set();

app.use(async ctx => {
    ctx.body = `
    <html>
      <body>
        <div id="messages" style="height: 300px; overflow-y: scroll;"></div>
        <input type="text" id="messageInput" />
        <button onclick="sendMessage()">发送</button>
        <script>
          //html5  新特性  利用websocket协议可以和服务器建立链接
          const ws = new WebSocket('ws://localhost:3001');
          ws.onmessage = function (event) {
            //   console.log(event);
            const messages = document.getElementById('messages');
            messages.innerHTML += event.data + '<br />';
          }
          function sendMessage() {
            const msg = document.getElementById('messageInput').value.trim();
            console.log(msg);
            ws.send(msg);
          }
        </script>
      </body>
    </html>
    `
  })

//处理socket链接  
//ws是websocket的简写
app.ws.use((ctx,next) =>{
    clients.add(ctx.websocket);
    console.log('-------');
    //事件监听
    ctx.websocket.on('message',message => {
        // console.log(message.data,'\\\\',ctx.websocket);
        for(let client of clients){
            client.send(message.toString()); //服务器广播给所有的客户端
        }
    })
    ctx.websocket.on('close',()=>{
        console.log('-----close');
        clients.delete(ctx.websocket); 
    })
})


app.listen(3001,()=>{
    console.log('app started at port 3001...');
});