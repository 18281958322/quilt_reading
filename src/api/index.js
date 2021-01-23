import axios from 'axios'
import { Message } from 'element-ui'

const server = axios.create({
  baseURL: '/api', // 配置axios请求的地址
  headers: {
    post: { 'Content-Type': 'application/json; charset=utf-8' },
    common: { 'Authorization': '' } // 设置请求头为 Authorization
  },
  crossDomain: true,
  withCredentials: true,  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
})

// 配置发送请求前的拦截器 可以设置token信息 
server.interceptors.request.use(config => {
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
  return config;
}, error => {
  Message({
    showClose: true,
    message: '网络请求失败，请稍后再试',
    type: 'error',
    duration: 2000,
  })
  return Promise.reject(error);
});

// 配置响应拦截器 
server.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    if (res.code === 401) {
      //当判读token失效或者没有登录时的处理，目前没用到
      Message({
        showClose: true,
        message: '登录状态已过期，请重新登录',
        type: 'warning',
        duration: 2000,
      })
    } else {
      Message({
        showClose: true,
        message: '服务器开小差了，请稍后再试',
        type: 'error',
        duration: 2000,
      })
    }
    return Promise.reject(res)
  } else {
    return Promise.resolve(res)
  }
}, error => {
  Message({
    showClose: true,
    message: '网络请求失败，请稍后再试',
    type: 'error',
    duration: 2000,
  })
  return Promise.reject(error);
});

export default server