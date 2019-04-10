import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import createRootReducer from '../reducers';


export const history = createBrowserHistory();
const appliedMiddlewares = applyMiddleware(thunk);

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer(history))

export default function configureStore(preloadedState) {
    const store = createStore(
        persistedReducer,
        preloadedState,
        isProd || isTest ?
            compose(
                appliedMiddlewares,
            ) :
            compose(
                appliedMiddlewares,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
            ),

    );

    const persistor = persistStore(store);

    return { store, persistor };
}
