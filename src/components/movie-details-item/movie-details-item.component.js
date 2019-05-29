import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles'
import { Link } from 'react-router-dom';

import styles from './styles.scss'

const MovieDetailsItem = ({ movie: { title, poster_path, vote_average, release_date, runtime, overview }}) => {
    return (
            <div className={styles['movie-details-container']}>
                <div className={styles['movie-details-item']}>
                    <Link to='../' className={styles['back-button']}>
                        <Button htmlType='submit'
                                type='primary'
                        >
                            Search
                        </Button>
                    </Link>
                    <div className={styles['movie-details-poster']}>
                        <img src={poster_path} alt='Movie poster'/>
                    </div>
                    <div className={styles['movie-details-info']}>
                        <div className={styles['movie-details-heading-line']}>
                            <h3 className={styles.h3}>{title}</h3>
                            <div className={styles.rate}>{vote_average}</div>
                        </div>
                        <div className={styles['movie-details-tech-info']}>
                            <div className={styles.duration}>{release_date && release_date.slice(0, 4)}</div>
                            <div className={styles.runtime}>{runtime} min</div>
                        </div>

                        <p>{overview}</p>
                    </div>
                </div>
            </div>
    )
};

MovieDetailsItem.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDetailsItem);
