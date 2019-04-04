const { resolve  } = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Autoprefixer = require('autoprefixer');

const publicPath = resolve(__dirname, '/public');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: {
        path: publicPath,
        publicPath: isProd ? './' : '/',
        chunkFilename: '[name].js',
        filename: '[name].js'
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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        },
                    },
                    'eslint-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:  [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
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
                    'sass-loader',
                ]
            },
            {
                test: /\.less$/,
                use:  [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
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
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ],
};