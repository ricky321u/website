var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // or devtool: 'eval' or `cheap-module-eval-source-map` to debug issues with compiled output:
  devtool: 'eval',
  entry: {
    app: [
      // 'whatwg-fetch',
      // necessary for hot reloading with IE:
      // 'eventsource-polyfill',
      'babel-polyfill',
      // listen to code updates emitted by hot middleware:
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true&quiet=true',
      './client/index'
    ],
    // vendor: ['jquery','react', 'redux', 'immutable' /*,'moment','countup.js' , 'masonry-layout'*/]
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.js'}),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', 'scss' , 'css' , 'json']
  },
  module: {
    rules: [
      {
        test: /\.js(x)*?$/,
        exclude: /node_modules/,
        // include: __dirname,
        use: [
          'react-hot-loader/webpack',
          {
            loader: 'babel-loader' ,
            options: {
              cacheDirectory: false,
              presets: [ 'es2015', 'stage-0', 'react' ],
              plugins: [ 'transform-decorators-legacy' , 'transform-async-to-generator' ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:[ 'css-loader' ,
            {
              loader: 'sass-loader',
              options:{
                includePaths:[ path.resolve( __dirname, './node_modules/compass-mixins/lib') ]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader:'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]',
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader:'url-loader',
            options: {
              limit: '10000',
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader:'file-loader',
            options:{
              limit: '1024',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};
