import fs   from 'fs';
import path from 'path';
import express , { Router } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

// import morgan from 'morgan';
// import api_route from './router/index'; //api
import { ngrokConnecter , webpack } from './helper';

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Route, RouterContext, match , browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';



const {
      SERVER_PORT ,
      SERVER_DOMAIN ,
      NGROK_EXTERNAL_URL ,
      REDIS_HOST,
      REDIS_PORT ,
      SERVICE_STATUS,
      SERVICE_START_DATE,
      SERVICE_END_DATE,
    } = require('dotenv').config();


const app = express();
const __UNIVERSAL__ = false; // 這邊設定是不是要開啟 isomorphic
const port = SERVER_PORT || 3000;
const indexHTML = fs.readFileSync(path.join( __dirname, '..' ,'index.html'), {encoding: 'utf-8'});
app.use( helmet() );
app.use( bodyParser.json({limit: '50mb'}) );
app.use( bodyParser.urlencoded({extended: true , limit: '50mb' }) );
// app.use( morgan( 'combined',  {
//     skip: (req, res) => { return res.statusCode < 400 },
//     stream: fs.createWriteStream(__dirname + '/storage/log/server.log', {flags: 'a'})
//   }));
app.disable('x-powered-by');

if(process.argv[2] === '--dev'){

app.use( webpack() )}



const server = app.listen( port , function(err) {
  process.stdout.write('\u001B[2J\u001B[0;0f');
  console.log('\x1b[34m[Render Mode]\x1b[0m',`\x1b[36m ${__UNIVERSAL__ ? 'isomorphic' : 'normal' } \x1b[0m Role`);
  console.log('\x1b[32m[Success]\x1b[0m','Server: Listening \x1b[36m' + port +'\x1b[0m Port');
  NGROK_EXTERNAL_URL === 'enable' && ngrokConnecter();
});


// app.use( '/assets', express.static('assets' , { maxage: '1d' }) );
app.use( '/assets', express.static('assets') );


if( __UNIVERSAL__ ){


  app.use( ( req, res, next ) => {

    const configureStore = require('../common/store/configureStore');
    const reactRouting = require('../common/router/routing');

    if( typeof window === undefined ){
      window = new Object();
    }

    const store = configureStore();
    const routes = (<Route {...reactRouting(store)} ></Route>);
  	// react-router
  	match({ routes, location: req.url}, ( error, redirectLocation, renderProps ) => {
  		if ( error ) { return res.status(500).send( error.message ); }
  		if ( redirectLocation ) { return res.redirect( 302, redirectLocation.pathname + redirectLocation.search ); }
        // return next('err msg: route not found'); // yield control to next middleware to handle the request
  		if ( renderProps == null ) { return res.status(404).send( 'Not found' ); }

  		const initView = renderToString((
  			<Provider store={store}>
  			  <RouterContext {...renderProps} />
  			</Provider>
  		))

  		let page = indexHTML.replace(' <!--${html}--> ', initView );
      res.status(200).send(page);
  	})

  })

  app.get('*', function(req, res) {
  	res.status(404).send('Server.js > 404 - Page Not Found');
  });

  app.use((err, req, res, next) => {
    console.error('Error on request %s %s', req.method, req.url);
    console.error(err.stack);
    res.status(500).send('Server error');
  });

}else{

  app.get('*', function(req, res) {
      res.status(200).sendFile(path.join(__dirname, '..' , 'index.html'));
  });

}


process.on('uncaughtException', function( evt ) {
  if(evt.code === 'EADDRINUSE') {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log('\x1b[33m[WARNING] Port ' + evt.port + ' is already in use!\x1b[0m' );
  }else{
    process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log( '\x1b[32mUncaughtException Message: ' + evt + '\x1b[0m' );
  }
});
