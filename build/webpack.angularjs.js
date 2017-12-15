let webpackMerge =  require('webpack-merge'),
 baseWebpackConfig =  require('./webpack.base')

let angularWebpackConfig = {

}



module.exports = webpackMerge(baseWebpackConfig , angularWebpackConfig)