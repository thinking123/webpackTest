
/*
* webpack-dev-server config
* */

const webpack = require('webpack');
const config = require('./webpack.angularjs.js');
const WebpackDevServer = require('webpack-dev-server')
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/" ,'webpack/hot/dev-server');

const compiler = webpack(config);


var server = new WebpackDevServer(compiler ,{
    hot:true,
    stats: { colors: true },
    //reload html template when changed
    // contentBase:'../index.html',
    // watchContentBase: true
});

server.listen(8080)






/*
* webpack-dev-middleware config
* 
* */


//
// const express = require('express'),
//     webpack = require('webpack'),
//     devMiddleware = require('webpack-dev-middleware'),
//     hotMiddleware = require('webpack-hot-middleware'),
//     app = express(),
//     config = require('./webpack.angularjs.js');
//
// console.log('config:',config);
// // config.entry.app.unshift("webpack-hot-middleware/client?http://localhost:3000/");
//
//
// // config.entry.app.unshift("webpack-hot-middleware/client");
//
//
// const compiler = webpack(config);
//
//
// var dev = devMiddleware(compiler,
//     {
//     publicPath: config.output.publicPath,
//     // headers:{ "X-Custom-Header-this": "yes" },
//     // logLevel:'trace',
//     logTime:true
//     })
//
// var hot = hotMiddleware(compiler,
//     {
//         log: console.log,
//         path: '/__webpack_hmr',
//         heartbeat: 10 * 1000,
//         reload: true
//     })
// // app.use(require("webpack-dev-middleware")(compiler, {
// //     noInfo: true, publicPath: config.output.publicPath
// // }));
// //
// // // Step 3: Attach the hot middleware to the compiler & the server
// // app.use(require("webpack-hot-middleware")(compiler, {
// //     log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
// // }));
//
// // app.use(devMiddleware(compiler, {
// //     publicPath: config.output.publicPath,
// //     headers:{ "X-Custom-Header-this": "yes" },
// //     logLevel:'trace',
// //     logTime:true,
// //     // lazy:true
// //
// // }));
// compiler.plugin('compilation', function(compilation) {
//     compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
//         console.log('=======================1')
//         hot.publish({ action: 'reload' })
//         cb()
//     })
// })
//
// app.use(dev);
// app.use(hot);
//
// dev.waitUntilValid(function(){
//     console.log('package is available===================')
// })
//
//
// // app.get("/", function(req, res) {
// //     res.sendFile(__dirname + '/index1.html');
// // });
//
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!\n');
// });


