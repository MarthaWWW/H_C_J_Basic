const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 暂时关闭代码格式检测
  // 配置反向代理
  // 让本地服务器向域外服务器请求
  devServer:{
    proxy:{
      //凡是ajax开头的，代理到猫眼电影
      '/ajax':{
        target:'https://m.maoyan.com',
        changeOrigin: true
        //pathRewrite: 路径重写属性
      }
    }
  }
})
// vue项目的配置覆盖


