import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'


import configureStore, { history } from './store'

import App from './components/app'
import './styles.scss'

const { store, persistor } = configureStore();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Route path='/' component={App}/>
                </BrowserRouter>
            </PersistGate>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);