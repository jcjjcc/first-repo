// 项目所有的向后端请求的接口都在这里

// 登录接口
//  /api/login server响应 
import request from './request'
export const login = (body) => request.post('/api/login',body).then(res => {
    return res
})

export const getUserInfo = () => request.get('/api/getUserInfo').then(res => {
    return res;
  })