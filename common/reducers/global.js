import { global } from '../constants/actionTypes';
import createReducer from '../utils/createReducer';
import { Map } from 'immutable';

const types = global;

const state = new Map({
  translate: ''
});


const handlers = {}

export default createReducer( state , handlers );
