import 'babel-polyfill';
import { all } from 'redux-saga/effects';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import createRootReducer from './reducers';

// TODO: move to index
import { moviesSaga } from './reducers/movies';

function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
}

const sagaMiddleware = createSagaMiddleware();
const appliedMiddlewares = applyMiddleware(sagaMiddleware)

export default (preloadedState) => {
    const store = createStore(
        createRootReducer(),
        preloadedState,
        appliedMiddlewares,
    );

    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    return store;
};
