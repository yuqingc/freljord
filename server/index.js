`use strict`
const path = require('path');

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express');

const proxy = require('http-proxy-middleware');

const app = express();

// option.target has to be specified
const ryzeApiProxy = proxy(
    {
        target: 'http://localhost:8080',
        pathRewrite: {
            '^/ryze': '/api',
        },
        router: {
            'localhost:3000/ryze': 'http://localhost:8080',
        }
    }
)

const PORT = 3000;

app.use('/ryze', ryzeApiProxy);

if (process.argv && process.argv[2] && process.argv[2] === 'dev') {
    console.log('Development mode is applied.');
    
    const devConfig = require('../webpack/webpack.dev');
    const compiler = webpack(devConfig);

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
            next();
        });
    });
} else {
    console.log('Production mode is applied.');
    const distStaticOptions = {
        dotfiles: 'ignore',
        extensions: ['css', 'js'],
        index: false,
    };
    app.use(express.static(path.join(__dirname, '../dist'), distStaticOptions));
    app.get('/*', function(req, res, next) {
        res.sendFile(path.join(__dirname, '../dist/index.html'), function(err) {
            if(err) {
                console.log('errr', err)
            }
        });
    });
}

app.listen(PORT, () => {
    console.log(`Freljord is listening to port :${PORT}`);
})