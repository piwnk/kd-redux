const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'undefined';

module.exports = {
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.json', '.html']
  },

  entry: (env !== 'production' ? [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  ] : []).concat(['./client/index.jsx']),

  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loaders: [
          'react-hot-loader/webpack'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[folder]_[path]__[name]_[local]__[hash:base64:16]',
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      filename: 'index.html',
      title: 'Chat!',
      inject: 'body'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  node: {
    fs: 'empty'
  },

  devServer: {
    contentBase: './public',
    hot: true
  }
};
