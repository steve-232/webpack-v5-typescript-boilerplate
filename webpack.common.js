/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'static/js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'templates/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              targets: {
                esmodules: true,
              },
            }]],
            // eslint-disable-next-line max-len
            plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/imgs/assets/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[hash][ext][query]',
        },
      },
    ],
  },
};
