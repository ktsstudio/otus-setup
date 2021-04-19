/* eslint-disable */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildPath = path.resolve(__dirname, 'public');
const srcPath = path.resolve(__dirname, 'src');
const appsPath = path.resolve(__dirname, '../');

module.exports = (opts, args) => {
  return {
    entry: './src/index.tsx',
    output: {
      path: buildPath,
      filename: `js/[name]-[hash].js`,
      publicPath: '/',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        shared: path.join(appsPath, 'shared/src'),
      }
    },

    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(srcPath, 'index.html'),
      }),
    ],
  
    devServer: {
      port: 9002,
      host: 'localhost',
      https: false,
      inline: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};
