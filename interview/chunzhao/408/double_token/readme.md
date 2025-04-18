# 双token鉴权

 - JWT JSON Web Token
 - 单token鉴权 长时间 不安全
 - 验证access token     refresh token
   - access token 有效期短  负责验证功能 expiresIn 安全
    - 401 access_token 失效
      refresh_token -> /api/refresh
      新的token
   - refresh token 有效期长  负责刷新access token
   - 无感刷新