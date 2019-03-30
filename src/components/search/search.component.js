import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import { loadMovies } from '../../reducers/movies'

import './styles.scss'

const RadioGroup = Radio.Group;

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            queryString: '',
            selectedFilter: '',
        };
    }

    onTextChange = e => this.setState({ queryString: e.target.value });

    onFilterChange = e => this.setState({ selectedFilter: e.target.value });

    onButtonClick = () => {
        const { queryString, selectedFilter } = this.state;
        const { dispatch } = this.props;

        dispatch(loadMovies({ queryString, selectedFilter }));
        this.setState({ queryString: '', selectedFilter: '' })
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
};

export default connect(
    ({
        movies: { isMoviesFetching }
    }) => ({ isMoviesFetching }),
)(Search);
