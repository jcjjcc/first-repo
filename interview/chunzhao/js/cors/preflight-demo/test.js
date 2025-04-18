
const http = require('http');

// 调用createServer创建http服务
const server = http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': req.headers.origin || '*', 
        'Access-Control-Allow-Credentials': 'true',
    }
    if(req.method === 'GET' && req.url === '/data0') {
        res.writeHead(200, headers);
        res.end('GET 请求成功');
        return; // 终止请求处理
    }
    if(req.method === 'POST' && req.url === '/data1') {
        let body = []
        req
          .on('data',(chunk)=>{
            body.push(chunk) 
          })
          .on('end',()=>{
            console.log(body.toString())
            res.writeHead(201, headers);
            res.end('POST 请求成功');
          })

        return; // 终止请求处理 
    }
    res.writeHead(404, headers);
    res.end('404 Not Found');
});




server.listen(8088, () => {
  console.log('服务器启动成功！')
})

server.on('error', (err) => {
  console.log('服务器启动失败，原因是：' + err)
})