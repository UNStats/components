const path = require("path");
const pkg = require("./package.json");

module.exports = {
  components: "src/**/[A-Z]*.{js,jsx}",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "config/Wrapper")
  },
  title: pkg.description,
  webpackConfig: {
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  }
};
