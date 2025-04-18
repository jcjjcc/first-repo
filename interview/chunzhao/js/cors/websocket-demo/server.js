const WebSocket = require('ws');
const http = require('http');

// 1. 创建一个 HTTP 服务器
// 2. 创建一个 WebSocket 服务器
// 3. 建立一次http连接

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server is running');
})


const wss = new WebSocket.Server({ 
    server,
    path: '/ws', // 与前端保持一致
 });

wss.on('connection', (ws) => {
  console.log('client connected');
  ws.on('message', (message) => {
    console.log('received: %s', message);
    // 向客户端发送消息
    ws.send('Hello from server!');
  });
   ws.send('Hello from server!');
})


server.listen(8080, () => {
  console.log('webSocket server is running on port 8080');
})