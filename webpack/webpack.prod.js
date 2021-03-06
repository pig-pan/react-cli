const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base.js")
const NODE_ENV = process.env.NODE_ENV;

const prodConfig= {
    mode: NODE_ENV,  // production
    devtool: 'source-map', // æåçæmap
}

module.exports = merge(baseConfig, prodConfig)