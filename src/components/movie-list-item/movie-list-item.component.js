import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss'

const MoviesListItem = ({ movie: { title, release_date, genres, poster_path, id } }) => (
    <div>
        <Link to={{pathname: `/movies/${id}`}}>
            <img src={poster_path} alt={title}/>
            <div className='movie-info'>
                <div className='title-details'>
                    <h3>{title}</h3>
                    <div className='genres'>{genres.join(' & ')}</div>
                </div>
                <span className='date'>
                    {release_date.slice(0, 4)}
                </span>
            </div>
        </Link>
    </div>
);

MoviesListItem.propTypes = {
    movie: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

export default MoviesListItem