import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'

import createRootReducer from '../reducers';


export const history = createBrowserHistory();
const appliedMiddlewares = applyMiddleware(thunk);

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
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

    return store
}
