// import axios from 'axios'
// import { Message } from 'element-ui'

// // create an axios instance
// const service = axios.create({
//   //baseURL: process.env.VUE_BASE_API,
//   //baseURL: 'http://39.105.180.35:8188',
//   baseURL: 'http://192.168.0.43:8100/api',
//   timeout: 8000,// request timeout 设置请求超时时间，单位（毫秒）
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'token': 'QYCz6SnXiBlEeFN/wIeEO8iraAhG9m4Ok0AYlk4gQ8spNPbMDDq6a4QANTbGg3EFueIaczI4zxFPRwGF3ym5MQ=='
//   }
// })

// // response interceptor 响应拦截
// service.interceptors.response.use(
//   response => {
//     const res = response.data // response.data里面的数据才是后台返回给我们的数据  200  500
//     // 200  500 后端这几个特定异常判断没有问题后，才能放行，进行相应数据
//     if (res.code === 500) {
//       Notification.error({
//         title: '服务器内部出现异常，请联系管理员'
//       })
//       return Promise.reject('error')// 记录错误
//     } else if (res.code === 400) { // 可能是其它参数出错
//       Notification.error({
//         title: res.msg
//       })
//       return Promise.reject('error')// 记录错误
//     } else {
//       // 以上验证通过之后再放行
//       return res
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       //message: error.message,
//       message: "接口数据异常，请联系管理员",
//       showClose: true,
//       dangerouslyUseHTMLString: true,
//       type: 'error',
//       duration: 3 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

// export default service


import axios from 'axios'
import confing from './confing'
const service = axios.create({
  // baseURL: confing.baseURL,
  // timeout: 10000,

  // baseURL: process.env.NODE_ENV === 'production' ? confing.baseURL : confing.baseURL,
  baseURL: 'http://192.168.0.43:8100/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'token': 'QYCz6SnXiBlEeFN/wIeEO8iraAhG9m4Ok0AYlk4gQ8spNPbMDDq6a4QANTbGg3EFueIaczI4zxFPRwGF3ym5MQ=='
  }
})

function qs(data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret.substring(0, ret.length - 1)
}

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  if (config.data) {
    config.data = qs(config.data)
  }




  // 在发送请求之前做些什么 传token
  // let token = 'QYCz6SnXiBlEeFN/wIeEO8iraAhG9m4Ok0AYlk4gQ8spNPbMDDq6a4QANTbGg3EFueIaczI4zxFPRwGF3ym5MQ=='
  // config.headers['Authorization'] = `Bearer ${token}`
  // config.headers['Content-Type'] = "application/x-www-form-urlencoded";
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log(error)
  return Promise.reject(error);
});

/**
 * @响应拦截
 */
service.interceptors.response.use(response => {

  if (response.status !== 200) {
    return Promise.reject(response)
  }
  /**
 * @code 登录过期 token验证失败 根据后端调 
 */
  // if (response.data.code == UtilVar.code) {
  //     // router.push("/login")
  // }
  return response.data
}, error => {
  // console.log('axiosError',error);
  let err = {
    success: false,
    msg: "未知异常，请联系管理员！"
  }
  return Promise.reject(err)
})

export default service