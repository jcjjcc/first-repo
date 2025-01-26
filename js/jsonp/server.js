// http 服务启动
// 内置的http模块 
// commonjs node早期  es6模块化  
const http = require('http');
// 启动http服务
// 基于请求/响应的简单协议
const server = http.createServer((req, res) => {
// 异步 高并发 
// 请求来到服务器后，该函数会被执行
// req 请求对象解析
// 拿到资源
// res 响应请求，
// http 结束
  const users =[{
    id: 1,
    name: 'zs'
  },{
    id: 2,
    name: 'ls'}
]
  console.log(JSON.stringify(users))
  console.log(users)
  console.log(`callback(${JSON.stringify(users)})`)
  console.log(`callback(${users})`)

  res.end(`callback(${JSON.stringify(users)})`)
  //res.end(`callback(${JSON.stringify(users)}); console.log(a,b)`)
})

server.listen(3000, () => {
  console.log('server is running at port 3000')
})