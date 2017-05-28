import webpack from 'webpack';
import config , { output } from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const compiler = webpack(config);

export default (  ) => ([
  webpackDevMiddleware( compiler, { noInfo: true, publicPath: output.publicPath } ),
  webpackHotMiddleware( compiler )
])
