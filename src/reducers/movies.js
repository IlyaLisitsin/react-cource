import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import filterMoviesCollection from '../helpers/filterMoviesCollection';

const MOVIES_FETCH = 'react-cource/movies/FETCH';
const MOVIES_UPDATE = 'react-cource/movies/UPDATE';
const MOVIES_FETCH_ERROR = 'react-cource/movies/FETCH_ERROR';
const MOVIES_SORT = 'react-cource/movies/MOVIES_SORT';

const initialState = {
  moviesCollection: [],
  isMoviesFetching: false,
  isMoviesFetchingError: false,
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIES_FETCH:
      return { ...state, isMoviesFetching: true };

    case MOVIES_UPDATE:
      return { ...state, isMoviesFetching: false, moviesCollection: payload };

    case MOVIES_FETCH_ERROR:
      return { ...state, isMoviesFetching: false };

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

export const loadMovies = (params) => ({
  type: MOVIES_FETCH,
  payload: params,
});

export const updateMovies = movies => ({
  type: MOVIES_UPDATE,
  payload: movies
});

export function* loadMoviesAsync({ payload }) {
  const response = yield call(fetch, 'https://reactjs-cdp.herokuapp.com/movies');
  const { data } = yield response.json();

  yield put(updateMovies(filterMoviesCollection(data, payload)));
}

export const getMoviesCollection = state => state.movies.moviesCollection

export function* sortMoviesAsync({ payload }) {
  const moviesCollection = yield select(getMoviesCollection)

  const moviesCollectionUpdated = yield moviesCollection.sort((a, b) => {
    if (a[payload] > b[payload]) return 1;
    return -1
  })

  yield put(updateMovies(moviesCollectionUpdated))
}

export function* watchLoadMovies() {
  yield takeLatest(MOVIES_FETCH, loadMoviesAsync);
}

export function* watchSortMovies() {
  yield takeLatest(MOVIES_SORT, sortMoviesAsync)
}

export function* moviesSaga() {
  yield all([
    watchLoadMovies(),
    watchSortMovies(),
  ]);
}
