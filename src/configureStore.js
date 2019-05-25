/* eslint-disable */

import 'babel-polyfill';


import { call, put, all, takeLatest } from 'redux-saga/effects';


import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import createRootReducer from './reducers';
import { usersSaga } from "./reducers/test";

function* rootSaga() {
    yield all([
        usersSaga(),
    ]);
}

const sagaMiddleware = createSagaMiddleware();

// export default (preloadedState) => {
export default () => {

    const store = createStore(
        createRootReducer(),
        // preloadedState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    return store;
};
