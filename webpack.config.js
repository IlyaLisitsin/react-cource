const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, arg) => {
    const { mode } = arg;

    const isProd = mode === 'production';

    return {
        output: {
            path: __dirname +  '/public',
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
                                presets: ['@babel/preset-env', '@babel/preset-react']
                            }
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
                                plugins: () => [require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                })],
                            }
                        }] : []),
                        'sass-loader',
                    ]
                },
            ],
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
    }
};