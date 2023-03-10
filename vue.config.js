const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const realApiUrl = process.env.VUE_APP_API_BASEURL
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
  devServer: {
    port: 8017,
    open: false // 自动打开浏览器
  },

  devServer: {
    open: false, //运行后自动打开浏览器
    port: process.env.VUE_APP_PORT, //挂载端口
    proxy: {

      '/api': {
        // 真实的后端服务器地址
        target: `${realApiUrl}`,
        ws: false,
        // 控制请求头中的host
        changeOrigin: true,
        //路径重写
        pathRewrite: {
          '^/api': '/api'
        }
      },
    }
  },
})




// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://192.168.0.43:8100/api',
//         // ws: true,
//         changeOrigin: true,
//         pathRewrite: { //路径重写
//           '^/api': '/'
//         }
//       }
//     }
//   }
// })


/*
 * @Author: daidai
 * @Date: 2021-11-22 14:57:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-29 15:12:50
 */
// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

// module.exports = {
//   publicPath: './',
//   outputDir: process.env.VUE_APP_outputDir || 'dist',
//   assetsDir: 'static',
//   filenameHashing: true,
//   lintOnSave: false,
//   runtimeCompiler: false,
//   transpileDependencies: [],
//   productionSourceMap: false,
//   css: {
//     // 是否使用css分离插件 ExtractTextPlugin
//     extract: process.env.NODE_ENV === "production" ? true : false,//是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
//     sourceMap: false,//是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
//     loaderOptions: {
//       sass: {
//         prependData: `@import "@/assets/css/variable.scss";`
//       }
//     },
//     // requireModuleExtension: true,
//   },

//   // chainWebpack: (config) => {
//   //   // 配置别名
//   //   config.resolve.alias
//   //     .set('@', resolve('src'))
//   //     .set('assets', resolve('src/assets'))
//   //     .set('assetsBig', resolve('src/pages/big-screen/assets'))
//   //     .set('components', resolve('src/components'))
//   //     .set('views', resolve('src/views'))
//   //     .set('api', resolve('src/api'))
//   //     .set('lib', resolve('src/lib'))

//   //   if (process.env.NODE_ENV === "production") {
//   //     // 删除系统默认的splitChunk
//   //     config.optimization.delete("splitChunks");
//   //   }
//   //   // 删除预加载
//   //   //  // 移除 prefetch  插件
//   //   //  config.plugins.delete('prefetch-index')
//   //   //  // 移除 preload 插件
//   //   //  config.plugins.delete('preload-index');
//   //   //   config.optimization.minimizer('terser').tap((args) => {
//   //   //     // 去除生产环境console
//   //   //     args[0].terserOptions.compress.drop_console = true
//   //   //     return args
//   //   //   })
//   // },
//   // configureWebpack: config => {
//   //   // 给输出的js名称添加hash
//   //   config.output.filename = "static/js/[name].[hash].js";
//   //   config.output.chunkFilename = "static/js/[name].[hash].js";
//   //   config.optimization = {
//   //     splitChunks: {
//   //       cacheGroups: {
//   //         // 抽离所有入口的公用资源为一个chunk
//   //         common: {
//   //           name: "chunk-common",
//   //           chunks: "initial",
//   //           minChunks: 2,
//   //           maxInitialRequests: 5,
//   //           minSize: 0,
//   //           priority: 1,
//   //           reuseExistingChunk: true,
//   //           enforce: true
//   //         },
//   //         // 抽离node_modules下的库为一个chunk
//   //         // vendors: {
//   //         //   name: "chunk-vendors",
//   //         //   test: /[\\/]node_modules[\\/]/,
//   //         //   chunks: "initial",
//   //         //   priority: 2,
//   //         //   reuseExistingChunk: true,
//   //         //   enforce: true
//   //         // },
//   //         element: {
//   //           name: "chunk-element-ui",
//   //           test: /[\\/]node_modules[\\/]element-ui[\\/]/,
//   //           chunks: "all",
//   //           priority: 3,
//   //           reuseExistingChunk: true,
//   //           enforce: true
//   //         },
//   //         yhhtUi: {
//   //           name: "chunk-yhht-ui",
//   //           test: /[\\/]node_modules[\\/]yhht-ui[\\/]/,
//   //           chunks: "all",
//   //           priority: 4,
//   //           reuseExistingChunk: true,
//   //           enforce: true
//   //         },
//   //         datav: {
//   //           name: "chunk-datav",
//   //           test: /[\\/]node_modules[\\/]@jiaminghi[\\/]data-view[\\/]/,
//   //           chunks: "all",
//   //           priority: 4,
//   //           reuseExistingChunk: true,
//   //           enforce: true
//   //         },
//   //       }
//   //     }
//   //   };
//   // },
//   // // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
//   // parallel: require('os').cpus().length > 1,

//   devServer: {
//     // 配置多个代理
//     proxy: {
//       '/api': {
//         target: 'http://192.168.0.43:8100/api',
//         // https://geo.datav.aliyun.com/areas_v3
//         ws: false,
//         changeOrigin: true,  //是否允许跨域
//         pathRewrite: { //路径重写
//           '^/api': '/'
//         }
//       },


//     }
//   },
//   pluginOptions: {
//   }
// }


// const { defineConfig } = require('@vue/cli-service')
// const path = require("path")
// const webpack = require("webpack")
//
// // 后端真实的请求地址
// const realApiUrl = process.env.VUE_APP_API_BASEURL
//
// module.exports = defineConfig({
//   transpileDependencies: true,
//
//   // 前端代理服务器
//   devServer: {
//     open: true, //运行后自动打开浏览器
//     port: process.env.VUE_APP_PORT, //挂载端口
//     proxy: {
//       // proxyon为代理前缀，如果请求中包含该前缀，就走代理
//       '/api': {
//         // 真实的后端服务器地址
//         target: `${realApiUrl}`,
//         ws: false,
//         // 控制请求头中的host
//         changeOrigin: true,
//          //路径重写
//         pathRewrite: {
//           '^/api': '/api'
//         }
//       },
//     }
//   },
// })
