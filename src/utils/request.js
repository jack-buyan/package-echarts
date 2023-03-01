import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({

    baseURL: process.env.NODE_ENV === "development" ? process.env.VUE_APP_API_BASEURL : process.env.VUE_APP_API_BASEURL,
    timeout: 8000
})

// response interceptor 响应拦截
service.interceptors.response.use(
    response => {
        const res = response.data // response.data里面的数据才是后台返回给我们的数据  200  500
        // 200  500 后端这几个特定异常判断没有问题后，才能放行，进行相应数据
        if (res.code === 500) {
            Notification.error({
                title: '服务器内部出现异常，请联系管理员'
            })
            return Promise.reject('error')// 记录错误
        } else if (res.code === 400) { // 可能是其它参数出错
            Notification.error({
                title: res.msg
            })
            return Promise.reject('error')// 记录错误
        } else {
            // 以上验证通过之后再放行
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            //message: error.message,
            message: "接口数据异常，请联系管理员",
            showClose: true,
            dangerouslyUseHTMLString: true,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
