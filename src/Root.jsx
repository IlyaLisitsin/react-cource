/* eslint-disable */

import 'isomorphic-fetch';
import 'babel-polyfill';
import React, { Fragment, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles'
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import  { Button, Input, Icon, Radio } from 'antd'

import ant from './styles/ant/index.less'
import styles from './styles.scss'

import Footer from "./components/footer/footer.component";
import { increment, fetchUsers } from "./reducers/test";

const Home = () => (<div>Home <Link to='/users'>Go to useers</Link></div>)
const Users = connect(({ test: { isFetch, users }}) => ({ isFetch, users }), ({ fetchUsers }))(({ isFetch, users, fetchUsers }) => {
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Users Page</h2>
            <button onClick={() => {
                // console.log(window.location)
                // window.location = 'haha'
            }}>Hahahah</button>
            {isFetch && <h2>Loading!</h2>}
            {users.map(el => <li key={el.id}>{el.name}</li>)}
        </div>
    );
});

const Increment = connect(({ test: { increment }}) => ({ increment }))(({ increment }) => <h1>{increment}</h1>)
const FetchIndicator = connect(({ test: { isFetch, users }}) => ({ isFetch, users }), ({ increment }))(({ isFetch, increment }) => <h2>{JSON.stringify(isFetch)}<Button htmlType='submit' type='primary' onClick={increment}>Click</Button></h2>)
const Haha = () => <div>Hahahahahahahahah</div>

const RadioGroup = Radio.Group;

import App from './components/app'

const Root = ({ router }) => (
    <App router={router} />
)

export default hot(module)(withStyles(styles, ant)(Root));
