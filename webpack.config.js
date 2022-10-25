const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    entry: "./src/electron.ts",
    target: "electron-main",
    resolve: {
      extensions: ['.ts', '.js', '.tsx'],
      fallback: {
        fs: false
      }
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: __dirname + "/dist",
      filename: "electron.js",
    },
  },
  {
    mode: "development",
    entry: "./src/app.tsx",
    target: "electron-renderer",
    devtool: "source-map",
    resolve: {
      extensions: ['.ts', '.js', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: __dirname + "/dist",
      filename: "app.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  },
  
];
