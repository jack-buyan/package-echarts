
import axios from 'axios'
let baseURL = "/api";
if (process.env.NODE_ENV === 'production') {
  baseURL = process.env.VUE_APP_API_BASEURL;
}
let tokenstr = JSON.parse(localStorage.getItem('token'))

const service = axios.create({
  timeout: 10000,
  baseURL,
   headers: {
     'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
     'token': tokenstr
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
  // config.headers['Authorization'] = `Bearer ${tokenstr}`
  // config.headers['Content-Type'] = "application/x-www-form-urlencoded;charset=UTF-8";
  return config

}, function (error) {
  // 对请求错误做些什么
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
 *
 */
  // if (!response.data.data.uuid) {
  //   // if (tokenstr == null) {
  //   //   console.log('跳转了');
  //   //   router.replace('/')

  //   // }
  // }
  // if (response.data.code == UtilVar.code) {
  //   // router.push("/login")
  // }
  // if (tokenstr == null) {

  //   window.location.replace(window.location.href)
  //   console.log(tokenstr);
  //   console.log('打印了');
  //   // router.replace("/")
  //   // console.log(router.replace);

  //   // this.$router.replace("/")
  //   // console.log('token没了');
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
