const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./assets/CodeEditor/CodeEditor.js",
  output: {
    filename: "codeEditor.min.js",
    path: __dirname + "/dist",
    library: "CodeEditor",
    libraryTarget: "umd",
    globalObject: "this",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
