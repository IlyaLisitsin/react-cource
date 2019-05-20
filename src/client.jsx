/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { BrowserRouter } from 'react-router-dom';

import Root from './Root'

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

ReactDOM.hydrate(
    <BrowserRouter>
        <StyleContext.Provider value={{ insertCss }}>
            <Root />
        </StyleContext.Provider>,
    </BrowserRouter>,
    document.getElementById('root')
)
