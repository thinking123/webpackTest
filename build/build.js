let webpack = require('webpack'),
    webpackConfig = require('./webpack.angularjs'),
    rm = require('rimraf')

rm('dist', () => {
    console.log('delete dist dir')

    webpack(webpackConfig, (err, stats) => {

        if (stats.hasErrors()) {
            console.log('compile failure webpack');
            var res = stats.toJson('errors-only');


            // console.log(res)
            console.log(res.errors)
            return;
        }


        if (stats.hasWarnings()) {
            console.log('compile has warnings webpack');
        }

        console.log('compile success')
    });
})
