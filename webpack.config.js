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
      // listen to code updates emitted by hot middleware:
      'webpack-hot-middleware/client?reload=true',
      './client/index'
    ],
    vendor: ['jquery','react','moment', 'immutable' , 'redux' ]
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', 'scss' , 'css' , 'json']
  },
  module: {
    noParse: /node_modules\/reactstrap-tether\/dist\/js\/tether.js/,
    loaders: [
      {
        test: /\.js(x)*?$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: [ 'react-hmre', 'es2015', 'stage-0', 'react' ],
          plugins: [ 'transform-decorators-legacy' , 'transform-async-to-generator' ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader?'
          + 'includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')
          + '&includePaths[]=' + path.resolve(__dirname, './client/sass')
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
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [ 'file?hash=sha512&digest=hex&name=[hash].[ext]' ]
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
