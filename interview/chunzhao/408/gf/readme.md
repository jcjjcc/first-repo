# 跨站脚本攻击（XSS） 跨站请求伪造（CSRF） 如何预防

- xss 
  攻击者通过在网页中注入恶意的脚本代码，窃取用户的信息或执行未授权的操作的攻击方式
  <script>alert('xss')</script></>
  假设有一个评论功能，用户输入的内容会直接显示在页面上，而没有对输入内容进行任何过滤或转义，那么攻击者就可以通过输入恶意的脚本代码来执行一些恶意操作，比如窃取用户的信息、发送请求等等。
  - 窃取用户的信息 cookie
  - 重定向到恶意网站
  - 串改网页内容 ，钓鱼攻击

  - 解决方法
  1. 对用户输入的内容进行严格的验证和过滤，防止注入恶意代码。
  2. 对html转义 sanitize-html 库
  3. 使用HTTPOnly Cookie来防止Cookie被JavaScript读取。
- csrf
  攻击者通过在用户不知情的情况下，利用用户的身份信息，向目标网站发送恶意请求的攻击方式

  - 假设用户登录到一个银行网站，并且该网站允许用户通过发送POST请求来转账
  - 过程：
    1. 用户访问银行网站，并且登录成功。
    2. 恶意网站
    <form action="https://bank.com/transfer" method="POST" style="display:none;">
    <input type="hidden" name="amount" value="1000">
    <input type="hidden" name="to" value="attacker_account">
    </form>
    <script>
        document.forms[0].submit();
    </script>

    - 解决方法
    1.使用CSRF token 
    2.cookie SameSite属性设置为Strict或Lax，这样可以防止跨站请求伪造攻击