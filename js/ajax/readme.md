# JS 拉取数据接口
- Ajax 老牌方案，基于 XMLHttpRequest 对象实现，可以实现跨域请求，可以发送 GET、POST、PUT、DELETE 请求，可以设置请求头、超时时间、请求体等。
  - 请求数据接口
   const xhr = new XMLHttpRequest();
   xhr.open('method', 'url',false);
  - 发送请求
   xhr.send()
  - 事件监听
   xhr.status === 200 && xhr.readyState === 4
   xhr.responseText 响应文本
- fetch 新方案，基于 Promise 对象实现
  fetch('url', {
    method: 'GET',
  })
  .then(response => response.json())
.then(data => console.log(data))

