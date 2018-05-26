const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/index.html'),
  title: 'Freljord',
  favicon: path.resolve(__dirname, '../src/images/favicon.ico')
});

const extractSass = new ExtractTextPlugin({
  filename: 'styles/[name].[hash].css',
  disable: process.env.NODE_ENV === 'development'
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

const globalProvide = new webpack.ProvidePlugin({
  React: 'react',
});

const globalDefinition = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  }
});

const htmlAddAssets = new AddAssetHtmlPlugin([
  {
    filepath: path.resolve(__dirname, '../assets/js/prism.min.js'),
    includeSourcemap: false,
  },
  {
    filepath: path.resolve(__dirname, '../assets/css/prism.css'),
    typeOfAsset: 'css',
    includeSourcemap: false,
  },
  {
    filepath: path.resolve(__dirname, '../assets/css/github-markdown.css'),
    typeOfAsset: 'css',
    includeSourcemap: false,
  }
]);

const uglifyPlugin = new UglifyJsPlugin();

module.exports = {
	mode: 'production',
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
				test: /\.s?css$/,
        use: extractSass.extract({
          // use style-loader in development
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, './postcss.config.js'),
                  ctx: {
                    env: 'production',
                  },
                }
              },
            },
            {
              loader: 'sass-loader',
            }
          ],
        })
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
    plugins:[tsconfigPathResolver],
	},
	plugins: [
    cleanDist,
    htmlPlugin,
    htmlAddAssets,
    extractSass,
    forkTsChecker,
    globalProvide,
    globalDefinition,
    uglifyPlugin,
],
  // publicPath is essential, without which the page will fail on refreshing the browser 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  }
};
