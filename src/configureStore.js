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

export default (preloadedState) => {
    const store = createStore(
        createRootReducer(),
        preloadedState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    console.log(23432, sagaMiddleware.run(rootSaga).done)
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => {
        console.log('llldsaldsaldsa')
        return store.dispatch(END)
    };

    return store;
};
