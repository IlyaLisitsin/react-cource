import { combineReducers } from 'redux';

import movies from './movies'
import test from './test'

export default () => combineReducers({
    movies,
    test,
});
