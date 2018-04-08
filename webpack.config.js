const path = require('path');

const config = {
  context: path.resolve(__dirname,'/'),
  entry: 'main.js',
  output: {
    path: path.resolve(__dirname,'/'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname,'/'),
    watchContentBase: true,
    port: 3000,
    open: true,
    hot:true
  },
};

module.exports = {
    mode:'development',
};