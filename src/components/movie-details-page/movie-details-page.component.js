import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovie, getMovies } from '../../config/api';

import MovieDetailsItem from '../movie-details-item'
import MovieListContainer from '../movie-list-container';
import filterMoviesCollection from '../../helpers/filterMoviesCollection';

class MovieDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                poster_path: '',
                title: '',
                overview: '',
                vote_average: 0,
                genres: [],
            },
            suggestedMoviesCollection: []
        }
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;

        getMovie(id)
            .then(response => response)
            .then(result => this.setState({ movie: result }))
            .finally(
                () => getMovies()
                    .then(({ data }) => {
                        const queryString = this.state.movie.genres[0];
                        const result = filterMoviesCollection(data, { queryString, selectedFilter: 'genre', idsToExclude: [Number(id)] });
                        this.setState({ suggestedMoviesCollection: result })
                    })
            )

    }

    render() {
        const { movie, suggestedMoviesCollection } = this.state;

        return (
            <Fragment>
                <MovieDetailsItem movie={movie} />
                <MovieListContainer moviesCollection={suggestedMoviesCollection} />
            </Fragment>
        )
    }
}

MovieDetailsPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default connect(
    null,
    null,
)(MovieDetailsPage);