var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var publicPath = path.resolve(__dirname, 'public');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8000',
        path.resolve(__dirname, 'app/index.js')
      ],
      vendor: ['react', 'react-dom']
    },
    output: {
        path: publicPath,
        filename: 'js/[name].js?[hash]'
    },
    resolve: {
      extension: ['', '.js', '.jsx', '.json']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          exclude: path.resolve(__dirname, 'node_modules')
        },
        {
          test: /\.css/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader?name=css/[name].[hash:8].[ext]")
        },
        {
          test: /\.scss/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?name=css/[name].[hash:8].[ext]")
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?name=images/[name].[hash:8].[ext]&limit=1024'
        },
        {
          test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?name=font/[name].[hash:8].[ext]&limit=10000"
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js?[hash]'),
      new ExtractTextPlugin("css/[name].css?[hash]", {
          allChunks: true,
          disable: false
      }),
      new HtmlWebpackPlugin({
        title: 'zhufeng-react',
        template: './app/index.html',
      })
    ],
    devtool: 'cheap-module-source-map'
};