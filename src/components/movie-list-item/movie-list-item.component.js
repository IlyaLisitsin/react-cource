import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles'

import styles from './styles.scss'

const MoviesListItem = ({ movie: { title, release_date, genres, poster_path, id } }) => (
    <div className={styles['movie-list-item']}>
        <Link to={{pathname: `/movies/${id}`}}>
            <img className={styles.img} src={poster_path} alt={title}/>
            <div className={styles['movie-info']}>
                <div className={styles['title-details']}>
                    <h3 className={styles.h3}>{title}</h3>
                    <div className={styles.genres}>{genres.join(' & ')}</div>
                </div>
                <span className={styles.date}>
                    {release_date.slice(0, 4)}
                </span>
            </div>
        </Link>
    </div>
);

MoviesListItem.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default withStyles(styles)(MoviesListItem)
