/* eslint-disable */

import 'isomorphic-fetch';
import 'babel-polyfill';
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles'

import { withRouter } from 'react-router';


// import App from './components/app'

import styles from './styles.scss'
import MovieDetails from "./components/movie-details-page";
import NotFoundPage from "./components/not-found";
import Search from './components/search'

const Test = (props) => <div>Test: {JSON.stringify(props)}</div>
const Mest = () => <div>yepo <Link to='/lol'>Liiink</Link><ul><Route path='/lol' component={Test} /></ul></div>

const Root = () => (
    <Fragment>
        <Switch>
            {/*<Route path="/" component={Search} />*/}
            {/*<Route path="/" component={withRouter(Test)} />*/}
            <Route path="/" component={Mest} />
            {/*<Route path='/movies/:id' component={MovieDetails} />*/}
            <Route component={NotFoundPage} />
        </Switch>
    </Fragment>
)

export default hot(module)(withStyles(styles)(Root));
// export default withStyles(styles)(Root);
// export default Root;
