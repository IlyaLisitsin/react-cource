import React  from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles'

import MovieListItem from '../movie-list-item'

import styles from './styles.scss'

const MovieListContainer = ({ moviesCollection }) => (
    <div className={styles['movies-list']}>
        {!moviesCollection.length && <div className={styles['no-films-found']}>No films found</div>}
        {moviesCollection.map(movie => (<MovieListItem key={movie.id} movie={movie}/>))}
    </div>
);

MovieListContainer.propTypes = {
    moviesCollection: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(MovieListContainer)
