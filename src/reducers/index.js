import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'


import movies from './movies'

export default history => combineReducers({
    movies,
    router: connectRouter(history),
});