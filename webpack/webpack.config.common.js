const { resolve  } = require('path');

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Autoprefixer = require('autoprefixer');

const publicPath = resolve(__dirname, '/public');
const isProd = process.env.NODE_ENV === 'production';
const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    //
    // output: {
    //     path: publicPath,
    //     publicPath: isProd ? './' : '/',
    //     chunkFilename: '[name].js',
    //     filename: '[name].js'
    // },
    output: {
        filename: 'js/[name].js',
        path: path.resolve('./public'),
    },
    optimization: {
        minimize: isProd,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'async'
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel', '@babel/plugin-transform-regenerator']
                        },
                    },
                    'eslint-loader'
                ]
            },
            {
                test: /\.scss$/,
                loader: [
                    isDevMod ? 'isomorphic-style-loader' : MiniCssExtractPlugin.loader,

                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use:  [
                    isDevMod ? 'isomorphic-style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    ...(isProd ?
                        [{
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [Autoprefixer({
                                    'browsers': ['> 1%', 'last 2 versions']
                                })],
                            }
                        }] : []),
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    },

                ]
            },
        ],
    },

    plugins: [
        isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
    ],
};
