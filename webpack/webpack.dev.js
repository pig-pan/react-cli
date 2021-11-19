const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { resolve } = require("./utils");
const baseConfig = require("./webpack.base.js");
const NODE_ENV = process.env.NODE_ENV;

module.exports = merge(baseConfig, {
  mode: NODE_ENV,  // development 
  devtool: 'source-map', // 打包生成map
  devServer: {
    contentBase: resolve('../dist'),
    publicPath: '/',
    hot: true,
    host: "localhost",
    port: 7001,
    compress: true,
    open: true,
    historyApiFallback: true,
    https: false,
    // proxy: {
    //   '/api': {
    //     target: "http://localhost:5000",
    //     changeOrigin: true,
    //     // ws: true,//websocket支持
    //     secure: false,
    //     pathRewrite: {
    //       "^/api": "/"
    //     }
    //   }
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()  // 配合hot设置hmr
  ],
  optimization:{
    usedExports: true
  }
})