import 'isomorphic-fetch';
import 'babel-polyfill';
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles'

import styles from './styles.scss'

const Home = () => <div>Home</div>
const Users = () => <div>Users</div>

const Root = () => (
    <Fragment>
        <h1 className={styles.red}>css modules</h1>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Redirect to="/" />
        </Switch>
    </Fragment>
)

export default hot(module)(withStyles(styles)(Root));
