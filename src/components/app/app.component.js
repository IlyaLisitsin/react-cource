import React from 'react';

import Routes from './routes';
import Footer from '../footer';

import 'antd/es/style/index.less'
import 'antd/lib/radio/style/index.less'
import 'antd/lib/input/style/index.less'
import 'antd/lib/button/style/index.less'

import './styles.scss'

import ErrorBoundary from '../error-boundary'

const App = () => (
    <ErrorBoundary>
        <div className='container'>
            <Routes />
            <Footer />
        </div>
    </ErrorBoundary>
);

export default App;
