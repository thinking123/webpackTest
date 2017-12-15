let webpackMerge =  require('webpack-merge'),
    baseWebpackConfig =  require('webpack.base')

const angularWebpackConfig = {
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
            }
        ],
    },
};


module.exports = webpackMerge(baseWebpackConfig , angularWebpackConfig)