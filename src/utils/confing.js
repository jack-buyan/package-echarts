const env = process.env.NODE_ENV

// const config = {
//     development: {
//         baseURL: '/api',
//     },
//     production: {
//         // baseURL: 'http://192.168.0.218:8105/api',
//         // baseURL: 'https://policy.cjrfw.cn/jsc/api',
//         baseURL: '/api',
//     },
// }

// export default {
//     baseURL: config[env].baseURL
// }



const config = {
    development: {
        baseURL: 'http://192.168.0.218:8105/api',
    },
    production: {
        baseURL: 'https://policy.cjrfw.cn',
    },
}

export default {
    baseURL: config[env].baseURL
}