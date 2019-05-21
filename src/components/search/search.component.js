import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { loadMovies as loadMoviesDispatcher} from '../../reducers/movies';

import './styles.scss'

const pathStringNormalizer = pathString => pathString.substring(1).split('&').reduce((acc, next) => {
    next = next.split('='); // eslint-disable-line no-param-reassign
    acc[next[0]] = next[1];          // eslint-disable-line prefer-destructuring
    return acc
}, {});

const RadioGroup = Radio.Group;

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            queryString: '',
            selectedFilter: '',
        };
    }

    componentDidMount() {
        const { dispatch } = this.props;

        const { location: { pathname } } = this.props;
        const { search, filter } = pathStringNormalizer(pathname);

        if (search && filter) {
            dispatch(loadMoviesDispatcher({ queryString: search, selectedFilter: filter }));
        }
    }

    loadMovies = () => {
        const { queryString, selectedFilter } = this.state;
        const { dispatch } = this.props;

        dispatch(loadMoviesDispatcher({ queryString, selectedFilter }));
    };

    onTextChange = e => this.setState({ queryString: e.target.value });

    onFilterChange = e => this.setState({ selectedFilter: e.target.value });

    onButtonClick = () => {
        const { queryString, selectedFilter } = this.state;
        const { history } = this.props;

        this.loadMovies();
        this.setState({ queryString: '', selectedFilter: '' });

        history.push(`/${queryString && `search=${queryString}&`}${selectedFilter && `filter=${selectedFilter}`}`)
    };

    render() {
        const { queryString, selectedFilter } = this.state;
        const { isMoviesFetching } = this.props;

        return (
            <header>
                <div className='header-wrapper'>
                    <h2>Find your movie</h2>
                    <Input
                        addonAfter={<Icon type='rollback' />}
                        defaultValue='Type something'
                        value={queryString}
                        onChange={this.onTextChange}
                    />

                    <div className='header-bottom'>
                        <RadioGroup onChange={this.onFilterChange} value={selectedFilter}>
                            <span className='search-by'>Search by</span>
                            <Radio value='title'>Title</Radio>
                            <Radio value='genre'>Genre</Radio>
                        </RadioGroup>
                        <Button
                            htmlType='submit'
                            type='primary'
                            loading={isMoviesFetching}
                            onClick={this.onButtonClick}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </header>
        )
    }
}

Search.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isMoviesFetching: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(connect(
    ({
         movies: { isMoviesFetching },
         router: { location },
     }) => ({ isMoviesFetching, location }),
)(Search));
