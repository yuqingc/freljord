const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/index.html')
});

const extractSass = new ExtractTextPlugin({
    filename: 'styles/[name].[hash].css',
    disable: process.env.NODE_ENV === "development"
});

const forkTsChecker = new ForkTsCheckerWebpackPlugin({
  tsconfig: './src/ts/tsconfig.json',
  tslint: './src/ts/tslint.json'
});

module.exports = {
	mode: "development",
  entry: './src/ts/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [ 
          'ts-loader', 
      ],
        exclude: /node_modules/
			},
			{
				test: /\.scss$/,
            use: extractSass.extract({
                use: [{
										loader: "css-loader",
										options: {
											sourceMap: true
										}
                }, {
                    loader: "sass-loader",
										options: {
											sourceMap: true
										}
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
			}
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
	},
	plugins: [
    htmlPlugin,
    extractSass,
    forkTsChecker,
],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};
