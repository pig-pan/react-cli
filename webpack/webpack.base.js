const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("./utils");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  
  entry: {
    main: resolve("../src/index.js")
  },

  output: {
    filename: 'js/[name].[hash:8].js',
    publicPath: './',
    path: resolve('../dist')
  },

  resolve: {
    extensions: ['.js', '.jsx', 'tsx', '.less', ".scss", ".css"],
    modules: ['node_modules'],  // 解析模块时搜索的目录
    mainFiles: ['index', 'Index'],  // 解析目录时要使用的文件名
    alias: {
      '@': resolve('../src'),
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?|tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]  
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|JPG|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // 小于10000B的图片base64方式引入
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // 小于10000B的图片base64的方式引入
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "css/[name].css":  "css/[name].[hash:8].css",
      chunkFilename: devMode ? "css/[id].css" : "css/[id].[hash:8].css"
    })
  ],

  optimization: {
    // splitChunks 根据不同的策略来分割打包出来的bundle
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /\/node_modules\//,
          name: true,
          chunks: 'all',
          automaticNameDelimiter: '~',  // 文件名称分隔符~
        }
      }
    }
  }

}