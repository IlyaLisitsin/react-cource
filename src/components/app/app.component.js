import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import PropTypes from 'prop-types';

import Routes from './routes';
import Footer from '../footer';

import styles from './styles.scss'

import ErrorBoundary from '../error-boundary'

const App = ({ router }) => (
    <ErrorBoundary>
        <div className={styles.container}>
            <Routes router={router} />
            <Footer />
        </div>
    </ErrorBoundary>
);

App.propTypes = {
    router: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
