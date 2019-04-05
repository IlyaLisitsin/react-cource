import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Radio } from 'antd';

import MovieListItem from '../movie-list-item'
import { sortMoviesList } from '../../reducers/movies'

import './styles.scss'

const RadioGroup = Radio.Group;


class MoviesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: '',
        }
    }

    onFilterChange = e => {
        const { dispatch } = this.props;
        this.setState({ selectedFilter: e.target.value });

        dispatch(sortMoviesList(e.target.value))
    };

    render() {
        const { selectedFilter } = this.state;
        const { moviesCollection } = this.props;

        return (
            <Fragment>
                <div className='movies-container-bar'>
                    <div className='movies-found'>{moviesCollection.length} movies found</div>
                    <div>
                        <span>Sort by:</span>
                        <RadioGroup onChange={this.onFilterChange} value={selectedFilter}>
                            <Radio value='release_date'>release date</Radio>
                            <Radio value='vote_average'>rating</Radio>
                        </RadioGroup>
                    </div>
                </div>
                <div className='movies-container'>
                    {!moviesCollection.length && <div className='no-films-found'>No films found</div>}
                    {moviesCollection.map(movie => (<MovieListItem key={movie.id} movie={movie}/>))}
                </div>
            </Fragment>
        )
    }
}

MoviesContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    // isMoviesFetching: PropTypes.bool.isRequired,
    moviesCollection: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
    ({
        movies: { moviesCollection }
    }) => ({ moviesCollection }),
    null
)(MoviesContainer)

// export default MoviesContainer