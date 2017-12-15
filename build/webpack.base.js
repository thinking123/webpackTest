let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    dotEnv = require('dotenv'),
    isDev = dotEnv.config().ENV == 'development'

console.log('start compiler')
let htmlConfig = {
    title: 'this is yilong test page',
    filename: 'yilong.html',
    hash: true,
    showErrors: true,
    template: './index.html'
}

const config = {
    entry: './index.js',
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: isDev
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: isDev
                    }
                }]
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.build.js'
    },
    plugins: [
        new HtmlWebpackPlugin(htmlConfig),
    ]
}


// export default config;

module.exports = config