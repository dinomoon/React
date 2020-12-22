const path = require('path');
const refreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', //실서비스: production
  devtool: 'eval', //실서비스: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // 중요!
  entry: { // 입력
    // client.jsx에서 WordRelay를 부르기 때문에 WordRelay는 넣지 않아도 된다.
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ]
      }
    }]
  },

  plugins: [
    new refreshWebpackPlugin()
  ],

  output: { // 출력
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist',
  },

  devServer: {
    publicPath: '/dist',
    hot: true
  },
};