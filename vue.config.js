// const url = "http://127.0.0.1:8080"; // 测试
const url = "http://test.700du.com.cn"; // 测试
const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 打包生成gzip压缩

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

  outputDir: "dist",

  productionSourceMap: false, // 关闭生成环境source map

  lintOnSave: true, // 开启eslint校验

  // 开发环境配置。设置端口号，代理跨域
  devServer: {
    port: 9527, // 端口号
    // https: true, // https:{type:Boolean}
    open: false,
    // 开发配置。跨域
    proxy: {
      "/mobile": {
        target: url,
        changeOrigin: true,
        pathRewrite: {
          "^/mobile": "/mobile",
        },
      },
      "/upload/oss": {
        target: "https://api.700du.cn/oss/sts",
        changeOrigin: true,
        pathRewrite: {
          "^/upload/oss": "/upload/oss",
        },
      },
      "/wechat": {
        target: url,
        pathRewrite: {
          "^/wechat": "/wechat",
        },
      },
    },
  },
  // scss 变量注入
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import \"~@/assets/style/variables.scss\";",
      },
    },
  },

  configureWebpack: config => {
    // 定义压缩文件类型  // 压缩css为gz
    const productionGzipExtensions = ["js", "css"];
    if (process.env.NODE_ENV === "production") {
      // 生产环境
      config.plugins.push(
        new CompressionWebpackPlugin({
          // asset: "[path].gz[query]", // 提示 compression-webpack-plugin@3.0.0的话asset改为filename
          filename: "[path].gz[query]", // 提示 compression-webpack-plugin@3.0.0的话asset改为filename
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8,
        }),
      );
    }
  },
};
