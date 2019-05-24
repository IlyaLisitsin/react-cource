/* eslint-disable */
import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';

const INIT_INCREMENT = 'ssr/test/INIT_INCREMENT';
const INCREMENT = 'ssr/test/INCREMENT';
const FETCH_USERS = 'ssr/users/FETCH';
const UPDATE = 'ssr/users/UPDATE';

const initialState = {
    increment: 0,
    isFetch: false,
    users: [],
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    console.log('TYPE', type)

    switch (type) {
        case FETCH_USERS:
            return { ...state, isFetch: true };
        case UPDATE:
            return { ...state, isFetch: false, users: payload };
        case INCREMENT:
            return { ...state, increment: state.increment + 1 };
        default:
            return state;
    }
};

export default reducer;

export const increment = () => ({
    type: INCREMENT
});

export const updateUsers = users => ({
    type: UPDATE,
    payload: users,
});

export const fetchUsers = () => ({
    type: FETCH_USERS,
});

// Sagas
export function* fetchUsersAsync() {
    const response = yield call(fetch, 'http://jsonplaceholder.typicode.com/users');
    const users = yield response.json();

    yield put(updateUsers(users));
}

export function* incrementAsync() {
    yield put(increment());
}

export function* watchFetchUsers() {
    yield takeLatest(FETCH_USERS, fetchUsersAsync);
}

export function* watchIncrement() {
    yield takeEvery(INIT_INCREMENT, incrementAsync);
}

// Users Saga
export function* usersSaga() {
    yield all([
        watchFetchUsers(),
        watchIncrement(),
    ]);
}
