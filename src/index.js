/* eslint-disable */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from './store'

import App from './components/app'
import './styles.scss'

const store = configureStore();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <Route path='/' component={App}/>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);