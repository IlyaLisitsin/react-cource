import filterMoviesCollection from '../helpers/filterMoviesCollection';
import { getMovies } from '../config/api';

const MOVIES_FETCH = 'react-cource/movies/FETCH';
const MOVIES_FETCH_FULFILLED = 'react-cource/movies/FETCH_FULFILLED';
const MOVIES_FETCH_ERROR = 'react-cource/movies/FETCH_ERROR';
const MOVIES_SORT = 'react-cource/movies/MOVIES_SORT';

const initialState = {
  moviesCollection: [],
  // moviesFetching: { isMoviesFetching: false },
  // filterState: null,
  isMoviesFetching: false,
  isMoviesFetchingError: false,
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIES_FETCH:
      return { ...state, isMoviesFetching: true };

    case MOVIES_FETCH_FULFILLED:
      return { ...state, isMoviesFetching: false, moviesCollection: payload };

    case MOVIES_FETCH_ERROR:
      return { ...state, isMoviesFetching: false };

    case MOVIES_SORT:
      return { ...state, moviesCollection: state.moviesCollection.sort((a, b) => {
          if (a[payload] > b[payload]) return 1;
          return -1
        }) };

    default:
      return state;
  }
};

export default reducer;

export function loadMoviesFulfilled(moviesCollection) {
  return {
    type: MOVIES_FETCH_FULFILLED,
    payload: moviesCollection,
  }
}

export function loadMovies(loadSettings) {
  return dispatch => {
    dispatch({ type: MOVIES_FETCH });

    getMovies().then(({ data }) => {
            const result = filterMoviesCollection(data, loadSettings);
            dispatch(loadMoviesFulfilled(result))
          })
          .catch(error => {
            console.warn(error);
            dispatch({ type: MOVIES_FETCH_ERROR });
          })
  };
}

export function sortMoviesList(payload) {
  return {
    type: MOVIES_SORT,
    payload
  }

}