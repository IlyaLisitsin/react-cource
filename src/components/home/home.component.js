import React, { Fragment } from 'react'
import Search from "../search/search.component";
import MoviesContainer from "../movies-container";

const Home = () => (
    <Fragment>
        <Search />
        <MoviesContainer />
    </Fragment>
);

export default Home