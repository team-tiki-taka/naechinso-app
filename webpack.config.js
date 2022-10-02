const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {EnvironmentPlugin, DefinePlugin} = require('webpack');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: path.join(__dirname, 'index.web.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
          // publicPath: 'https://cdn.example.com/', // uncomment to override webpack public path
          // esModule: true
          scalings: {'@2x': 2, '@3x': 3},
        },
        loader: 'react-native-web-image-loader',
      },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new EnvironmentPlugin({JEST_WORKER_ID: null}),
    new DefinePlugin({process: {env: {}}}),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    alias: {'react-native$': 'react-native-web'},
    extensions: ['.web.js', '.ts', '.tsx', '.jsx', '.js', '.json'],
  },
};
