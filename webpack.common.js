const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        use: "babel-loader"
      }
    ]
  }
};
