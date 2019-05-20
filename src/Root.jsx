/*eslint-disable*/

import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

// import Hello from './components/Hello';
// import HomePage from './pages/HomePage';

import './styles.scss'
import styles from './styles.scss'

console.log(23423, styles.red)

const Hello = ({name}) => <div>Hello ------- {name}</div>
const Home = () => <div>Home</div>
const Users = () => <div>Users</div>

const Root = ({ Router, location, context }) => (
    <Router location={location} context={context}>
        <h1 className={styles.red}>css mosule</h1>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Redirect to="/" />
        </Switch>
    </Router>
);

export default hot(module)(Root);
