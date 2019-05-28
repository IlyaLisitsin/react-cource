import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Radio, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles'
import { Link } from 'react-router-dom';

import { loadMovies } from '../../reducers/movies';

import styles from './styles.scss'

const RadioGroup = Radio.Group;

const pathStringNormalizer = pathString => pathString.substring(1).split('&').reduce((acc, next) => {
    next = next.split('='); // eslint-disable-line no-param-reassign
    acc[next[0]] = next[1];          // eslint-disable-line prefer-destructuring
    return acc
}, {});

function Search({ isMoviesFetching, loadMovies, router }) {
    const [queryString, setQueryString] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    const onButtonClick = () => loadMovies({ queryString, selectedFilter })

    useEffect(() => {
        const { pathname } = router.location;
        const { search, filter } = pathStringNormalizer(pathname);
        loadMovies({ queryString: search, selectedFilter: filter });
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles['header-wrapper']}>
                <h2 className={styles.h2}>Find your movie</h2>
                <Input
                    addonAfter={<Icon type='rollback' />}
                    defaultValue='Type something'
                    value={queryString}
                    onChange={e => setQueryString(e.target.value)}
                />

                <div className={styles['header-bottom']}>
                    <RadioGroup onChange={e => setSelectedFilter(e.target.value)} value={selectedFilter}>
                        <span className={styles['search-by']}>Search by</span>
                        <Radio value='title'>Title</Radio>
                        <Radio value='genre'>Genre</Radio>
                    </RadioGroup>
                    <Button
                        htmlType='submit'
                        type='primary'
                        loading={isMoviesFetching}
                        onClick={onButtonClick}
                    >
                        <Link to={`/${queryString && `search=${queryString}&`}${selectedFilter && `filter=${selectedFilter}`}`}>Search</Link>
                    </Button>
                </div>
            </div>
        </header>
    )}

Search.propTypes = {
    loadMovies: PropTypes.func.isRequired,
    isMoviesFetching: PropTypes.bool.isRequired,
    router: PropTypes.object.isRequired,
};

export default connect(
    ({
         movies: { isMoviesFetching },
     }) => ({ isMoviesFetching }),
    ({ loadMovies })

)(withStyles(styles)(Search))
