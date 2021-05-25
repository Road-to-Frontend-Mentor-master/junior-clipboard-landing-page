const path = require('path');

module.exports = {
  entry: {
    main: './src/javascripts/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs/javascripts'),
  },
  mode: 'development'
}
