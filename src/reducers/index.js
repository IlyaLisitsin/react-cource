/* eslint-disable */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import movies from './movies'
import test from './test'

export default history => combineReducers({
    movies,
    test,
    // router: connectRouter(history),
});
