import { Router, Route, Link , browserHistory , IndexRoute , Redirect } from 'react-router';
import React from 'react';
import routing from './routing';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux'


const store = configureStore();
const history = syncHistoryWithStore( browserHistory, store );
const routes = routing(store);

export default (
  <Provider  store={store}>
    <Router history={ history } children={ routes }/>
  </Provider>
)
