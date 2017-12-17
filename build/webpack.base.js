let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
dotEnv = require('dotenv'),
    isDev = dotEnv.config().parsed.ENV == 'development'
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
console.log(dotEnv.config().ENV)
console.log(dotEnv.config().parsed)
console.log(dotEnv.config(), isDev ? 'is developemnt' : 'not dev')
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// isDev = false
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Create multiple instances
const extractCSS = new ExtractTextPlugin('stylesheets/one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/two.css');


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
    entry: {
        app: ['./index.js'],
        myvendor: ['angular', 'lodash']
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
                test: /\.scss$/,
                use: extractLESS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader', options: {
                            sourceMap: isDev
                        }
                    },
                        {
                            loader: 'sass-loader', options: {
                            sourceMap: isDev
                        }
                        }]
                })
                ,
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
                ,
            },
            {
                test: /\.(png|jpg|gif|txt)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'[path][name].[ext]',
                            // publicPath:'myassets/',
                            outputPath: 'resources-output/',
                            // useRelativePath:true
                        }
                    }
                ]
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.build.v-[name].js',
        publicPath: '/',

    },
    devtool: '#source-map',
    plugins: [
        new HtmlWebpackPlugin(htmlConfig),
        // new HtmlWebpackHarddiskPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //
        extractCSS,
        extractLESS,
        // new UglifyJsPlugin({
        //     test: /\.js($|\?)/i,
        //     sourceMap: true
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["commons"],
            minChunks: Infinity,
            // filename: "commonsfilename.js",
            // (the filename of the commons chunk)

            // minChunks: 3,
            // (Modules must be shared between 3 entries)

            // chunks: ["pageA", "pageB"],
            // (Only use these entries)
        })
        // new ExtractTextPlugin("styles2.css"),
        // new webpack.NoEmitOnErrorsPlugin(),
        // new FriendlyErrorsPlugin(),
    ]
}


// export default config;

module.exports = config