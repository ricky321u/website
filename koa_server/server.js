import Koa from 'koa';
import Router from 'koa-router';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';
import webpack from 'webpack';
import fs from 'fs';
import morgan from 'koa-morgan';
import serve from 'koa-static';
import etag from 'koa-etag';
import conditional from 'koa-conditional-get';
import { join } from 'path';
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import config , { output } from '../webpack.config';
const compiler = webpack(config);



const {
    SERVER_PORT ,
    SERVER_DOMAIN ,
    REDIS_HOST,
    REDIS_PORT ,
    SERVER_STATUS,
    } = require('dotenv').config();

// const indexHTML = fs.readFile(join( __dirname, '..' ,'index.html'), {encoding: 'utf-8'});
const port = Number(SERVER_PORT) || 3000;
const dev = SERVER_STATUS !== 'production';
const server = new Koa();
const router = new Router();


server.use( etag() );
server.use( conditional() );
server.use( serve( join( __dirname,  '..' )));
server.use( serve( join( __dirname , '..' , 'assets' )));
server.use( devMiddleware( compiler, {
  noInfo: true,
  publicPath: output.publicPath
} ) )
server.use( hotMiddleware( compiler ) )
server.use( bodyParser({
    jsonLimit: '5mb',
    formLimit: '5mb'
  }));





server.use( helmet() );
// server.use( morgan( 'combined',  {
//     skip: (req, res) => { return res.statusCode < 400 },
//     stream: fs.createWriteStream(__dirname + '/storage/log/server.log', {flags: 'a'})
//   }));

server.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
});

router.get('/', function* (next){
  yield this.render();
  yield next;
});

server.use( router.routes() );

process.on('uncaughtException', function( evt ) {
  if(evt.code === 'EADDRINUSE') {
    // process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log('\x1b[33m[WARNING] Port ' + evt.port + ' is already in use!\x1b[0m' );
  }else{
    // process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log( '\x1b[32m UncaughtException Message: ' + evt + '\x1b[0m' );
  }
});

// app.prepare()
// .then(() => {
  //
  // server.use( helmet() );
  //
  // router.get( '/', async ctx => {
  //   await app.render(ctx.req, ctx.res, '/', ctx.query)
  //   ctx.respond = false
  // })
  //
  // router.get( '*', async ctx => {
  //   await handle(ctx.req, ctx.res)
  //   ctx.respond = false
  // })
  // server.use( router.routes() );
  //
  // server.use( async (ctx, next) => {
  //   ctx.res.statusCode = 200
  //   await next()
  // })
  //
// })


// process.on('uncaughtException', function( evt ) {
//   if(evt.code === 'EADDRINUSE') {
//     // process.stdout.write('\u001B[2J\u001B[0;0f');
//     console.log('\x1b[33m[WARNING] Port ' + evt.port + ' is already in use!\x1b[0m' );
//   }else{
//     // process.stdout.write('\u001B[2J\u001B[0;0f');
//     console.log( '\x1b[32mUncaughtException Message: ' + evt + '\x1b[0m' );
//   }
// });



// const configureStore = require('../common/store/configureStore');
// const reactRouting = require('../common/router/routing');
//
// app.use( ( req, res, next ) => {
//   const store = configureStore();
//   const routes = (<Route {...reactRouting(store)} ></Route>);
//   // react-router
//   match({ routes, location: req.url}, ( error, redirectLocation, renderProps ) => {
//     if ( error ) { return res.status(500).send( error.message ); }
//     if ( redirectLocation ) { return res.redirect( 302, redirectLocation.pathname + redirectLocation.search ); }
//       // return next('err msg: route not found'); // yield control to next middleware to handle the request
//     if ( renderProps == null ) { return res.status(404).send( 'Not found' ); }
//
//     const initView = renderToString((
//       <Provider store={store}>
//         <RouterContext {...renderProps} />
//       </Provider>
//     ))
//
//     let page = indexHTML.replace(' <!--${html}--> ', initView );
//     res.status(200).send(page);
//   })
//
// })
//
// app.get('*', function(req, res) {
//   res.status(404).send('Server.js > 404 - Page Not Found');
// });
//
// app.use((err, req, res, next) => {
//   console.error('Error on request %s %s', req.method, req.url);
//   console.error(err.stack);
//   res.status(500).send('Server error');
// });
