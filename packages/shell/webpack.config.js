const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  entry: "./src/toto.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!react-error-boundary)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    // in order to load the .App.tsx file without specifying the extension
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".css", ".json", ".ts", ".tsx"],
  },
  devServer: {
    // webpack-dev-server configuration
    port: 3000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index-template.html",
    }),
    new ModuleFederationPlugin({
      name: "shell",
      shared: ["react", "react-dom"],
    }),
  ],
};
