const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base.js")
const NODE_ENV = process.env.NODE_ENV;

const prodConfig= {
    mode: NODE_ENV,  // production
    devtool: 'source-map', // 打包生成map
}

module.exports = merge(baseConfig, prodConfig)