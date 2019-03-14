const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "[name].[contentHash].js",
    chunkFilename: "[name].[contentHash].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024 * 8,
            name: "img/[name].[hash:8].[ext]"
          }
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: "single",
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin({ sourceMap: true }),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        favicon: "./src/assets/favicon-32x32-next.png",
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeAttributeQuotes: true
        }
      })
    ],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 80 * 1024,
      minChunks: 1,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: function(module, chunks, chacheGroupKey) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `vendor_${packageName.replace("@", "")}`;
          }
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css",
      chunkFilename: "[id].[contentHash].css"
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});
