/* eslint-disable */

import 'isomorphic-fetch';
import 'babel-polyfill';
import React, { Fragment, Component } from 'react';
import { hot } from 'react-hot-loader';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles'
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import  { Button, Input, Icon, Radio } from 'antd'

import ant from './styles/ant/index.less'
import styles from './styles.scss'

import Footer from "./components/footer/footer.component";
import { testIncrement, startFetch } from "./reducers/test";

const Home = () => <div>Home <Link to='/users'>Go to useers</Link></div>
const Users = () => <div>Users <Link to='../'><Button htmlType='submit' type='danger'>Faaa</Button></Link></div>
const Increment = connect(({ test: { increment }}) => ({ increment }))(({ increment }) => <h1>{increment}</h1>)

class FetchIndicator extends Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     console.log('Component did mount', this.props)
    //     this.props.startFetch()
    // }

    componentWillMount() {
        console.log('Component will mount', this.props)
        this.props.startFetch()
    }

    render() {
        return (<h2>{JSON.stringify(this.props.isFetch)}<Button htmlType='submit' type='primary' onClick={this.props.testIncrement}>Click</Button></h2>)
    }
}

const FetchIndicatorConnected = connect(({ test: { isFetch } }) => ({ isFetch }), ({ startFetch, testIncrement}))(FetchIndicator)

const RadioGroup = Radio.Group;

const Root = () => (
    <Fragment>
    <h1 className={styles.red}>css modules</h1>
        <Input
            addonAfter={<Icon type='rollback' />}
            defaultValue='Type something'
        />
        <RadioGroup>
            <Radio value='title'>Title</Radio>
            <Radio value='genre'>Genre</Radio>
        </RadioGroup>
        <Increment />
        <FetchIndicatorConnected />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Redirect to="/" />
        </Switch>
        <Footer />
    </Fragment>
)

export default hot(module)(withStyles(styles, ant)(Root));
