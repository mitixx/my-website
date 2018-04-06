const path = require('path');

const config = {
  context: path.resolve(__dirname),
  entry: 'main.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    open: true
  },
};

module.exports = {
    mode:'development',
};