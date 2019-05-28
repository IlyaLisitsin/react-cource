/* eslint-disable */

import filterMoviesCollection from '../helpers/filterMoviesCollection';
import { getMovies } from '../config/api';
import {all, call, put, takeLatest, take} from "redux-saga/effects";
import {fetchUsersAsync, increment, updateUsers, watchFetchUsers, watchIncrement} from "./test";

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

export function sortMoviesList(payload) {
  return {
    type: MOVIES_SORT,
    payload
  }
}

export function loadMoviesFulfilled(moviesCollection) {
  return {
    type: MOVIES_FETCH_FULFILLED,
    payload: moviesCollection,
  }
}

// export function loadMovies(loadSettings) {
//   return dispatch => {
//     dispatch({ type: MOVIES_FETCH });
//
//     getMovies().then(({ data }) => {
//             const result = filterMoviesCollection(data, loadSettings);
//             dispatch(loadMoviesFulfilled(result))
//           })
//           .catch(error => {
//             console.warn(error);
//             dispatch({ type: MOVIES_FETCH_ERROR });
//           })
//   };
// }

export const loadMovies = (params) => ({
  type: MOVIES_FETCH,
  payload: params,
});

export const updateMovies = movies => ({
  type: MOVIES_FETCH_FULFILLED,
  payload: movies
});

export function* loadMoviesAsync({ payload }) {
  // const action = yield take(MOVIES_FETCH)
  const { queryString, selectedFilter } = payload;
  const response = yield call(fetch, 'https://reactjs-cdp.herokuapp.com/movies');
  const { data } = yield response.json();

  yield put(updateMovies(filterMoviesCollection(data, payload)));
}

export function* watchLoadMovies() {
  yield takeLatest(MOVIES_FETCH, loadMoviesAsync);
}

export function* moviesSaga() {
  yield all([
    watchLoadMovies(),
  ]);
}
