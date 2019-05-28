import 'isomorphic-fetch';
import 'babel-polyfill';
import React  from 'react';
import { hot } from 'react-hot-loader';
import withStyles from 'isomorphic-style-loader/withStyles'
import PropTypes from 'prop-types';

import ant from './styles/ant/index.less'
import styles from './styles.scss'

import App from './components/app'

const Root = ({ router }) => (
    <App router={router} />
)

Root.propTypes = {
    router: PropTypes.object.isRequired,
};

export default hot(module)(withStyles(styles, ant)(Root));
