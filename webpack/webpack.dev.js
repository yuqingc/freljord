const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
  entry: './src/ts/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [ 'ts-loader' ],
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
    extensions: [ '.tsx', '.ts', '.js' ]
	},
	plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html')
		}),
		extractSass
],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};
