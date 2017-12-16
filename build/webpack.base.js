let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
    dotEnv = require('dotenv'),
    isDev = dotEnv.config().ENV == 'development'
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack');

console.log('start compiler')
let htmlConfig = {
    title: 'this is yilong test page',
    filename: 'index.html',
    hash: true,
    showErrors: true,
    template: './index.html',
    // alwaysWriteToDisk: true
}

const config = {
    entry:{
        app:[
            './index.js'],
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader', 'sass-loader']
                // })
                ,
                use: [
                    {
                    loader: "style-loader"
                },
                    {
                    loader: "css-loader", options: {
                        sourceMap: isDev
                    }
                },

                    {
                    loader: "sass-loader", options: {
                        sourceMap: isDev
                    }
                }]
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.build.js',
        publicPath:'/'
    },
    devtool: '#source-map',
    plugins: [
        new HtmlWebpackPlugin(htmlConfig),
        // new HtmlWebpackHarddiskPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin(),
        // new FriendlyErrorsPlugin(),
    ]
}


// export default config;

module.exports = config