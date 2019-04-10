import React, { Fragment } from 'react'
import Search from '../search/search.component';
import HomeMoviesContainer from '../home-movies-container';

const Home = () => (
    <Fragment>
        <Search />
        <HomeMoviesContainer />
    </Fragment>
);

export default Home