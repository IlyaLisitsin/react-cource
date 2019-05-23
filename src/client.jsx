/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


import Root from './Root'

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}


import createRootReducer from './reducers';

const store = createStore(
    createRootReducer(),
    window.__PRELOADED_STATE__,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <StyleContext.Provider value={{ insertCss }}>
                <Root />
            </StyleContext.Provider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
