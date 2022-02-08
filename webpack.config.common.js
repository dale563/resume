const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    vendors: path.resolve(__dirname, "src/assets/scripts/vendors.js"),
  },

  output: {
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: "assets/scripts/[name][ext]",
    clean: true,
  },

  plugins: [
    new HtmlWebPackPlugin({
      // filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.pdf$/,
        type: "asset/resource",
        generator: {
          filename: "assets/documents/[name][ext]",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
