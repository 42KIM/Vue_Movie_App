const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-loader',
            options: {
                additionalData: '@import "~/scss/_variables";'
            }
        }
      ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  devServer: {
    port: 8079,
    historyApiFallback: true
  }
};