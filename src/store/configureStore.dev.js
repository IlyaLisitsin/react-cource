/* eslint-disable */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from '../reducers';
// import promiseMiddleware from 'redux-promise-middleware';
// import { routerMiddleware } from 'react-router-redux';
// import reducers from 'redux-modules';
//
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
//
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['auth'],
// };
//
// const persistedReducer = persistReducer(persistConfig, reducers);
//
// let composeEnhancers = compose;


// export default function configureStore(history) {
//   const router = routerMiddleware(history);
//   const enhancer = composeEnhancers(applyMiddleware(thunk, promiseMiddleware(), router));
//   const store = createStore(persistedReducer, enhancer);
//   return store;
// }

const devtools = process.env.NODE_ENV === 'test'
    ? x => x /* eslint-disable no-underscore-dangle */
    : window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable no-underscore-dangle */

// const store = createStore(reducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)));
const appliedMiddlewares = applyMiddleware(thunk);
const store = createStore(
    reducers,
    compose(
        appliedMiddlewares,
        devtools
    ),

);

export default store;
