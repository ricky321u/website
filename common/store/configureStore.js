import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';


export default ( preloadedState ) => {

  const middlewares = [thunk , routerMiddleware(browserHistory)];
  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger({
      level: 'info',
      duration: false,
      diff: false,
      collapsed: false
    });
    middlewares.push(logger);
  }


  const store = createStore( reducer, preloadedState,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;

}
