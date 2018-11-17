module.exports = {
  proxy: {
    '/apis': {
        // target: 'https://restapi.amap.com',  // 接口域名(高德web服务跨域)
        // target: 'http://192.168.20.238:8900',  // 接口域名(邵)
        target: 'http://192.168.20.220:8080',  // 接口域名(本地)
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  // 是否跨域
        pathRewrite: {
          '^/apis': ''   // 需要rewrite的,
      }              
    }
  }
}