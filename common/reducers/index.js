import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// Reducers
import global from './global';

export default combineReducers({
    global,
    routing: routerReducer
});
