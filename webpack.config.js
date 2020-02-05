const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    'react-view-pdf': './src/index.ts',
    'react-view-pdf.min': './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },

  optimization: {
    minimizer: [new TerserPlugin({ terserOptions: { warnings: false, ie8: true } })],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { tsconfig: path.resolve(__dirname, 'tsconfig.json') },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
