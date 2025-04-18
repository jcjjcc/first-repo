import axios from "./axios";
/**
 * //如果不使用proxy代理，就需要设置baseURL为：
//axios.defaults.baseURL = 'http://localhost:3000/api/'
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials =  true//跨域请求携带cookie
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token')} || null`
axios.defaults.headers.post['Content-Type'] = 'application/json'
 */
export const get = axios.get
export const post = axios.post

export const getUserInfo = async () => {
  return await get('/userInfo')
}


export const typeMap = {
  1: {
    icon: 'canyin'
  },
  2: {
    icon: 'fushi'
  },
  3: {
    icon: 'jiaotong'
  },
  4: {
    icon: 'riyong'
  },
  5: {
    icon: 'gouwu'
  },
  6: {
    icon: 'xuexi'
  },
  7: {
    icon: 'yiliao'
  },
  8: {
    icon: 'lvxing'
  },
  9: {
    icon: 'renqing'
  },
  10: {
    icon: 'qita'
  },
  11: {
    icon: 'gongzi'
  },
  12: {
    icon: 'jiangjin'
  },
  13: {
    icon: 'zhuanzhang'
  },
  14: {
    icon: 'licai'
  },
  15: {
    icon: 'tuikuang'
  },
  16: {
    icon: 'qita'
  }
}