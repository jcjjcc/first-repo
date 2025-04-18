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




传统的页面刷新机制与 Ajax 局部刷新的**最本质区别**在于：

**浏览器与服务器的通信方式和页面渲染机制不同**  
具体体现为以下两点：

---

### 1. **通信模式的区别**  
- **传统整页刷新**：  
  - **同步阻塞**：浏览器直接发起完整的 HTTP 请求，必须等待服务器返回**完整的 HTML 页面**（包括 CSS、JS 等资源）。  
  - **浏览器主导**：由浏览器内核（如 WebKit/Blink）直接处理新页面的加载和渲染，**强制重新解析整个 DOM 树**，导致页面完全重置。

- **Ajax 局部刷新**：  
  - **异步非阻塞**：通过 JavaScript 的 `XMLHttpRequest` 或 `Fetch API` **在后台发起异步请求**，仅传输数据（如 JSON/XML），不阻塞用户操作。  
  - **JavaScript 主导**：由开发者编写的 JavaScript 代码**按需处理响应数据**，通过操作 DOM API 精准更新页面局部内容（如修改某个 `<div>` 的内容）。

---

### 2. **数据传输与渲染成本的差异**  
- **传统整页刷新**：  
  - **冗余数据传输**：即使页面中仅有 10% 的内容变化，仍需重新传输完整的 HTML、CSS、JS 文件。  
  - **高渲染开销**：浏览器需要**重新解析整个 HTML 文档**，重建 DOM 树、应用 CSS 样式、执行 JavaScript，消耗大量计算资源。

- **Ajax 局部刷新**：  
  - **按需传输数据**：仅请求必要的数据（如用户评论内容），通常为轻量级的 JSON 格式，传输体积显著降低。  
  - **精准渲染更新**：通过 JavaScript **直接修改现有 DOM 节点**（如 `document.getElementById("comments").appendChild(newComment)`），绕过完整的页面渲染流程。

---

### 关键技术的支撑  
Ajax 实现局部刷新的核心依赖：  
1. **`XMLHttpRequest` 对象**（或现代 `Fetch API`）：允许 JavaScript 独立于浏览器导航行为发起 HTTP 请求。  
2. **DOM API**：通过 JavaScript 动态修改页面内容，无需整页刷新。  
3. **异步编程模型**：通过回调（Callback）、Promise 或 Async/Await 处理异步响应，确保用户交互不阻塞。

---

### 总结  
最本质的原因是 **Ajax 将浏览器与服务器的通信控制权从浏览器内核转移到了 JavaScript 代码**，使得开发者可以：  
1. 按需发起异步请求，避免整页刷新的网络和计算开销。  
2. 精细化操作 DOM，仅更新需要变化的页面区域。  
这种模式彻底改变了 Web 应用的交互体验，为单页应用（SPA）和现代前端框架（如 React、Vue）奠定了基础。