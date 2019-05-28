import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'

import Routes from './routes';
import Footer from '../footer';

import styles from './styles.scss'

import ErrorBoundary from '../error-boundary'

const App = () => (
    <ErrorBoundary>
        <div className={styles.container}>
            <Routes />
            <Footer />
        </div>
    </ErrorBoundary>
);

export default withStyles(styles)(App);
