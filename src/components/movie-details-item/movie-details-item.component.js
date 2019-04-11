/* eslint-disable */

import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss'

const MovieDetailsItem = ({ movie: { title, poster_path, vote_average, release_date, runtime, overview } }) => {
    return (
            <div className='movie-details-container'>
                <div className='movie-details-item'>
                    <Link to='../' className='back-button'>
                        <Button htmlType='submit'
                                type='primary'
                                >
                            Search
                        </Button>
                    </Link>
                    <div className='movie-details-poster'>
                        <img src={poster_path} alt='Movie poster'/>
                    </div>
                    <div className='movie-details-info'>
                        <div className='movie-details-heading-line'>
                            <h3>{title}</h3>
                            <div className='rate'>{vote_average}</div>
                        </div>
                        <div className='movie-details-tech-info'>
                            <div className='duration'>{release_date && release_date.slice(0, 4)}</div>
                            <div className='runtime'>{runtime} min</div>
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

export default MovieDetailsItem