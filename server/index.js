`use strict`

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express');

const devConfig = require('../webpack/webpack.dev');
const compiler = webpack(devConfig);

const app = express();

const PORT = 3000;

app.use(middleware(compiler, {
    publicPath: '/'
}));

app.listen(PORT, () => {
    console.log(`Freljord is listening to port :${PORT}`);
})