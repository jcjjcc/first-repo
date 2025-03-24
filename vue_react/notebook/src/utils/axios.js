import axios from "axios";
import { Toast } from "zarm";
//如果不使用proxy代理，就需要设置baseURL为：
//axios.defaults.baseURL = 'http://localhost:3000/api/'
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials =  true//跨域请求携带cookie
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token')} || null`
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res=>{
    // console.log('响应拦截')
    //统一错误处理
    //加工数据
    if(typeof res.data !=="object"){
        console.log(typeof res.data)
        Toast.show("服务器异常")
        return Promise.reject(res)       
    }
    if(res.data.resCode!==200){
        if(res.data.msg) Toast.show(res.data.msg)
        if(res.data.code === 401){
            // 401 unauthorized
            //token过期，跳转登录页
            window.location.href = "/login"
        }
        return Promise.reject(res.data)
    }
    return res.data
})
export default axios 