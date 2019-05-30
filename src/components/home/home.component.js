import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import Search from '../search/search.component';
import HomeMoviesContainer from '../home-movies-container';

const Home = ({ router }) => (
    <Fragment>
        <Search router={router} />
        <HomeMoviesContainer />
    </Fragment>
);

Home.propTypes = {
    router: PropTypes.object.isRequired,
};

export default Home
