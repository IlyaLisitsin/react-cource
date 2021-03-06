import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Radio } from 'antd';
import withStyles from 'isomorphic-style-loader/withStyles'

import MovieListContainer from '../movie-list-container'
import { sortMoviesList } from '../../reducers/movies'

import styles from './styles.scss'

const RadioGroup = Radio.Group;

class HomeMoviesContainer extends Component {
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
                <div className={styles['movies-container-bar']}>
                    <div className={styles['movies-found']}>{moviesCollection.length} movies found</div>
                    <div>
                        <span>Sort by:</span>
                        <RadioGroup onChange={this.onFilterChange} value={selectedFilter}>
                            <Radio value='release_date'>release date</Radio>
                            <Radio value='vote_average'>rating</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <MovieListContainer moviesCollection={moviesCollection}/>
            </Fragment>
        )
    }
}

HomeMoviesContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    moviesCollection: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
    ({
        movies: { moviesCollection }
    }) => ({ moviesCollection }),
    null
)(withStyles(styles)(HomeMoviesContainer))
