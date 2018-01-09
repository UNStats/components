const path = require('path');
const pkg = require('./package.json');

module.exports = {
  components: 'src/**/[A-Z]*.{js,jsx}',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'config/styleguide/Wrapper'),
  },
  title: pkg.description,
  webpackConfig: {
    devtool: 'cheap-module-source-map',
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
