const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/index.html'),
  title: 'Freljord',
  favicon: path.resolve(__dirname, '../src/images/favicon.ico')
});

const forkTsChecker = new ForkTsCheckerWebpackPlugin({
  tsconfig: path.resolve(__dirname, '../tsconfig.json'),
  tslint: path.resolve(__dirname, '../tslint.json')
});

// 超级无敌天坑
const tsconfigPathResolver = new TsconfigPathsPlugin({
  configFile: path.resolve(__dirname, '../tsconfig.json')
});

const cleanDist = new CleanWebpackPlugin(['dist/*'], {
    root: path.resolve(__dirname, '../'),
    verbose: true,
});

module.exports = {
	mode: "production",
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
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              path: './postcss.config.js',
                context: {
                env: 'production',
                },
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    plugins:[tsconfigPathResolver]
	},
	plugins: [
    cleanDist,
    htmlPlugin,
    forkTsChecker,
],
  // publicPath is essential, without which the page will fail on refreshing the browser 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  }
};
