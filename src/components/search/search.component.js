/* eslint-disable */

import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Radio, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import withStyles from 'isomorphic-style-loader/withStyles'


// import { loadMovies as loadMoviesDispatcher} from '../../reducers/movies';
import { loadMovies } from '../../reducers/movies';

import styles from './styles.scss'

const pathStringNormalizer = pathString => pathString.substring(1).split('&').reduce((acc, next) => {
    next = next.split('='); // eslint-disable-line no-param-reassign
    acc[next[0]] = next[1];          // eslint-disable-line prefer-destructuring
    return acc
}, {});

const RadioGroup = Radio.Group;

// class Search extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             queryString: '',
//             selectedFilter: '',
//         };
//     }
//
//     componentDidMount() {
//         // const { dispatch } = this.props;
//         //
//         // const { location: { pathname } } = this.props;
//         // const { search, filter } = pathStringNormalizer(pathname);
//         //
//         // if (search && filter) {
//         //     dispatch(loadMoviesDispatcher({ queryString: search, selectedFilter: filter }));
//         // }
//     }
//
//     loadMovies = () => {
//         const { queryString, selectedFilter } = this.state;
//         const { dispatch } = this.props;
//
//         dispatch(loadMoviesDispatcher({ queryString, selectedFilter }));
//     };
//
//     onTextChange = e => this.setState({ queryString: e.target.value });
//
//     onFilterChange = e => this.setState({ selectedFilter: e.target.value });
//
//     onButtonClick = () => {
//         const { queryString, selectedFilter } = this.state;
//         const { history } = this.props;
//
//         this.loadMovies();
//         this.setState({ queryString: '', selectedFilter: '' });
//
//         history.push(`/${queryString && `search=${queryString}&`}${selectedFilter && `filter=${selectedFilter}`}`)
//     };
//
//     render() {
//         const { queryString, selectedFilter } = this.state;
//         const { isMoviesFetching } = this.props;
//
//         return (
//             <header className={styles.header}>
//                 <div className={styles.headerWrapper}>
//                     <h2 className={styles.h2}>Find your movie</h2>
//                     <Input
//                         addonAfter={<Icon type='rollback' />}
//                         defaultValue='Type something'
//                         value={queryString}
//                         onChange={this.onTextChange}
//                     />
//
//                     <div className={styles.headerBottom}>
//                         <RadioGroup onChange={this.onFilterChange} value={selectedFilter}>
//                             <span className={styles.searchBy}>Search by</span>
//                             <Radio value='title'>Title</Radio>
//                             <Radio value='genre'>Genre</Radio>
//                         </RadioGroup>
//                         <Button
//                             htmlType='submit'
//                             type='primary'
//                             loading={isMoviesFetching}
//                             onClick={this.onButtonClick}
//                         >
//                             Search
//                         </Button>
//                     </div>
//                 </div>
//             </header>
//         )
//     }
// }

function Search({ isMoviesFetching, loadMovies }) {
    const [queryString, setQueryString] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    const onButtonClick = () => loadMovies({ queryString, selectedFilter })

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <h2 className={styles.h2}>Find your movie</h2>
                <Input
                    addonAfter={<Icon type='rollback' />}
                    defaultValue='Type something'
                    value={queryString}
                    onChange={e => setQueryString(e.target.value)}
                />

                <div className={styles.headerBottom}>
                    <RadioGroup onChange={e => setSelectedFilter(e.target.value)} value={selectedFilter}>
                        <span className={styles.searchBy}>Search by</span>
                        <Radio value='title'>Title</Radio>
                        <Radio value='genre'>Genre</Radio>
                    </RadioGroup>
                    <Button
                        htmlType='submit'
                        type='primary'
                        loading={isMoviesFetching}
                        onClick={onButtonClick}
                    >
                        Search
                    </Button>
                </div>
            </div>
        </header>
    )}

Search.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    // isMoviesFetching: PropTypes.bool.isRequired,
    // location: PropTypes.object.isRequired,
    // history: PropTypes.object.isRequired,
};

// export default withRouter(connect(
//     ({
//          movies: { isMoviesFetching },
//          router: { location },
//      }) => ({ isMoviesFetching, location }),
// )(Search));

export default connect(
    ({
         movies: { isMoviesFetching },
         // router: { location },
     // }) => ({ isMoviesFetching, location }),
     }) => ({ isMoviesFetching }),
    ({ loadMovies })

)(withStyles(styles)(Search))
