/* eslint-disable */
import React from 'react'

const MovieDetailsItem = ({ movie: { title, poster_path } }) => {
    return (<div>
        <h3>{title}</h3>
        <img src={poster_path} />
    </div>)
};

export default MovieDetailsItem