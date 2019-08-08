const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react"]
        }
      }
    ]
  },
  plugins: [htmlWebPackPlugin],
  devServer: {
    open: true
  }
};
