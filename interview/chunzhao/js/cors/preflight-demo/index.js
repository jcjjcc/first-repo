const http = require('http');

const server = http.createServer((req, res) => {
  const headers = {
     'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': req.headers.origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Custom-Header,abc',
    'Access-Control-Max-Age': '86400',
  };

  if (req.method === 'OPTIONS') {
    // 预检请求 200 201 Created 204 No Content
    res.writeHead(204, headers);
    console.log('预检请求');
    res.end();
    return; // 终止请求处理，避免继续执行后续代码
  }

  if (req.method === 'PUT' && req.url === '/data') {
    res.writeHead(201, headers);
    res.end('PUT 请求成功');
    return; // 终止请求处理
  }
  res.writeHead(404, headers);
  res.end('404 Not Found');
});

server.listen(3000, () => {
  console.log('服务器正在监听端口 3000');
});
