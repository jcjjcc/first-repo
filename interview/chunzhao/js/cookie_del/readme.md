# 如何删除cookie

- cookie 本地存储 请求传输  4kb
- domain 域名
  document.cookie = "token=123; domain=baidu.com"
- path 路径
  document.cookie = "token=123; path=/a"
- Expires / Max-Age 过期时间

- Secure 只在 https 协议下传输
- HttpOnly 禁止 js 读取 cookie 防止XSS攻击
- SameSite 限制第三方网站是否可以携带 cookie
  - Strict 完全禁止第三方携带 cookie
  - Lax 允许部分第三方携带 cookie
  - None 允许任何第三方携带 cookie