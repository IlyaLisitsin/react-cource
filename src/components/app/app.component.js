import React from 'react';

import Routes from './routes';
import Footer from '../footer';

import Test from '../test'

import 'antd/es/style/index.less'
import 'antd/lib/radio/style/index.less'
import 'antd/lib/input/style/index.less'
import 'antd/lib/button/style/index.less'

import './styles.scss'

import ErrorBoundary from '../error-boundary'

console.log(324324, Test)

const App = () => (
    <ErrorBoundary>
        <div className='container'>
            <Routes />
            <Footer />
            <Test />
        </div>
    </ErrorBoundary>
);

export default App;
