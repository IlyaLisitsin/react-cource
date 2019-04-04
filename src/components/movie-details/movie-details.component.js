/* eslint-disable */
import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { loadMovies } from '../../reducers/movies'

import Movie from '../movie'
import MoviesContainer from "../movies-container/movies-container.component";

class MovieDetailes extends Component {
    componentDidMount() {
        // const { dispatch, location: { state } } = this.props;
        // dispatch(loadMovies({ queryString: state.genres[0], selectedFilter: 'genre', idsToExclude: [state.id] }))
    }

    render() {
        const { location: { state } } = this.props;
        return (
            <Fragment>
                <div>WIP</div>
                {/*<Movie movie={state} />*/}
                {/*<MoviesContainer />*/}
            </Fragment>
        )
    }
}

MovieDetailes.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(
    null,
    null,
)(MovieDetailes);