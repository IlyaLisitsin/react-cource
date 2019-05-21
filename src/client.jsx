/* eslint-disable */

import React from 'react'
import { hydrate } from 'react-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { BrowserRouter, Route } from 'react-router-dom'

import Root from './Root'
// import {Provider} from "react-redux";
// import {ConnectedRouter} from "connected-react-router";
// import {history} from "./store";
// import {PersistGate} from "redux-persist/integration/react";
// import App from "./components/app";


const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

hydrate(

        <StyleContext.Provider value={{ insertCss }}>
            <BrowserRouter>
            <Root />
            </BrowserRouter>,
        </StyleContext.Provider>
    ,
    document.getElementById('root')
)
