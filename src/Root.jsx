/* eslint-disable */

import 'isomorphic-fetch';
import 'babel-polyfill';
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles'

import styles from './styles.scss'
import Footer from "./components/footer/footer.component";

import { Button } from 'antd'

const Home = () => <div>Home <Link to='/users'><Button htmlType='submit' type='primary'>Click</Button></Link></div>
const Users = () => <div>Users <Link to='../'><Button htmlType='submit' type='danger'>Faaa</Button></Link></div>

import test from './test.less'

const Root = () => (
    <Fragment>
        <h1 className={styles.red}>css modules</h1>
        <h1 className='blue'>test</h1>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Redirect to="/" />
        </Switch>
        <Footer />
    </Fragment>
)

export default hot(module)(withStyles(styles, test)(Root));
