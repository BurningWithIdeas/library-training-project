const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      Common: path.resolve(__dirname, "src/common"),
      Utils: path.resolve(__dirname, "src/utils"),
      Assets: path.resolve(__dirname, "public/assets"),
      Fonts: path.resolve(__dirname, "public/fonts"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
