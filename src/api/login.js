import request from '@/utils/request'

//登陆
export const login = (data) => {
    return request({
        url: '/jsclogin/jscUserLogin',
        method: 'post',
        data
    })
}

//验证码
export const loginYz = () => {
    return request({
        url: '/jsclogin/getCheckCode',
        method: 'post',

    })
}