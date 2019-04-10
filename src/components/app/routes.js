import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MovieDetails from '../movie-details-page'
import Home from '../home'
import NotFoundPage from '../not-found'

const Routes = () => (
    <Switch>
        <Route exact path="/:search?" component={Home} />
        <Route path='/movies/:id' component={MovieDetails} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default Routes;
