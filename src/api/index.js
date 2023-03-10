import request from '@/utils/request'

//首页
export const getOneDataAPI = (params) => {
    return request({
        url: `/jscjson/getList`,
        method: 'post',
        params,
      // headers: {
      //   'token': JSON.parse(localStorage.getItem('token'))
      // }
    })
}
