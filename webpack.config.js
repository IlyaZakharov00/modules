const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: "./app.js",
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: "raw-loader",
      },
      // {
      //   test: /\.html$/,
      //   use: [HtmlWebpackPlugin.loader, "html-loader"],
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "main.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
