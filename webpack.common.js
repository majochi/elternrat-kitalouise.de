const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Elternrat Kita Louise",
      template: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
