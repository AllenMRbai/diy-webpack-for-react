module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      }
    ]
  }
};
