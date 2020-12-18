const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    edit: './src/edit.js',
    main: './src/main.js',
    login: './src/login.js',
    auth: './src/auth.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};