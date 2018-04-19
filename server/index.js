`use strict`
const path = require('path');

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express');

const devConfig = require('../webpack/webpack.dev');
const compiler = webpack(devConfig);

const app = express();

const PORT = 3000;

const isDev = false;

app.use(middleware(compiler, {
    publicPath: '/',
    lazy: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}));

// https://github.com/jantimon/html-webpack-plugin/issues/145
app.use('*', function (req, res, next) {
    var filename = path.join(compiler.outputPath,'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
        if (err) {
            console.log('ERR', err)
            return next(err);
        }
        res.set('content-type','text/html');
        res.send(result);
        res.end();
    });
});

app.use(express.static(path.join(__dirname, "../dist")));

// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
// });

app.listen(PORT, () => {
    console.log(`Freljord is listening to port :${PORT}`);
})