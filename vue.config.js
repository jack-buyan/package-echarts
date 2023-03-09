const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        // 修改完浏览器网页标题需要重启项目才能生效
        args[0].title = '可视化平台';
        return args;
      }
      )
  },
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  assetsDir: "static", //放置生成的静态文件目录（js css img）
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // 警告 webpack 的性能提示
  configureWebpack: {
    performance: {
      hints: 'warning',
      // 入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  },
  // devServer: {
  //   port: 8017,
  //   open: false // 自动打开浏览器
  // }

  devServer: {
    open: false, //运行后自动打开浏览器
    port: process.env.VUE_APP_PORT, //挂载端口
    // 配置多个代理
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASEURL,
        // https://geo.datav.aliyun.com/areas_v3
        ws: false,
        changeOrigin: true,  //是否允许跨域
        pathRewrite: { //路径重写
          '^/api': '/'
        }
      },

    }
  },

})
