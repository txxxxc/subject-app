const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist/src'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: false,
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new webpack.SourceMapDevToolPlugin({})
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      client: path.resolve(__dirname, '../src/client')
    }
  },
  devServer: {
    inline: true
  }
};
//path.resolve("./src"),
