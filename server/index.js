`use strict`
const path = require('path');

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express');
var bodyParser = require('body-parser');
// var multer = require('multer');

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

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

app.use('/ryze', function (req, res, next) {
    console.log('baseurl', req.baseUrl, req.path, req.url, req.originalUrl);
    console.log('body', req.body, req.method);
    res.redirect(307, `http://localhost:8080/api${req.path}`)
    res.end();
})

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
        next();
    });
});

app.use(express.static(path.join(__dirname, "../dist")));

// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
// });

app.listen(PORT, () => {
    console.log(`Freljord is listening to port :${PORT}`);
})