import 'react-hot-loader'
import { hot } from 'react-hot-loader/root';
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore, { history } from './store'

import App from './components/app'
import './styles.scss'

const { store, persistor } = configureStore();

const Root = () =>
    (<Provider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Route path='/' component={App}/>
                </BrowserRouter>
            </PersistGate>
        </ConnectedRouter>
    </Provider>);

export default hot(Root)
