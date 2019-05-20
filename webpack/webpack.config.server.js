const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       resolve: {
  //         extensions: ['.scss', '.sass'],
  //       },
  //       use: [
  //         {
  //           loader: 'isomorphic-style-loader',
  //         },
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             modules: true,
  //             importLoaders: 1,
  //             localIdentName: '[name]__[local]___[hash:base64:5]'
  //           }
  //         },
  //         {
  //           loader: 'sass-loader'
  //         }
  //       ]
  //     }
  //   ],
  // },
  output: {
    filename: 'serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
});
