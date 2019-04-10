/* eslint-disable */

import React  from 'react';
import PropTypes from 'prop-types';

// import MovieListItem from '../home-movies-container/home-movies-container.component';
import MovieListItem from '../movie-list-item'

import './styles.scss'

const MovieListContainer = ({ moviesCollection }) => (
    <div className='movies-list'>
        {!moviesCollection.length && <div className='no-films-found'>No films found</div>}
        {moviesCollection.map(movie => (<MovieListItem key={movie.id} movie={movie}/>))}
    </div>
);

MovieListContainer.propTypes = {
    moviesCollection: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieListContainer