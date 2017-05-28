
var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
        'whatwg-fetch',
        './client/index.js'
      ],
    vendor: ['jquery','react','moment','countup.js', 'immutable' , 'redux' , 'masonry-layout' ]
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'common')
        ],
        query: {
          presets: [ 'es2015', 'stage-0', 'react' ],
          plugins: [ 'transform-flow-strip-types' , 'transform-decorators-legacy' , 'transform-async-to-generator']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader?includePaths[]='
          + path.resolve(__dirname, './node_modules/compass-mixins/lib')
        )
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]', // 這行暫時有路徑上的錯誤所以先註解
          //'image-webpack?{progressive:true, optimizationLevel: 10, interlaced: false }' /*pngquant:{quality: "65-90", speed: 4}*/
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?limit=1024&name=fonts/[name].[ext]'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'client/assets/sass')]
  },
};
