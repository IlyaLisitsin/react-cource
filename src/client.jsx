/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Root from './Root'
import configureStore from "./configureStore";

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

const store = configureStore(window.__PRELOADED_STATE__);

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
