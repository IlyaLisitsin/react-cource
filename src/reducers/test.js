/* eslint-disable */

const TEST_INCREMENT = 'ssr/test/INCREMENT';
const TEST_START_FETCH = 'ssr/test/START_FETCH';

const initialState = {
    increment: 0,
    isFetch: false,
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;


    console.log('TYPE', type)
    switch (type) {
        case TEST_INCREMENT:
            return { ...state, increment: state.increment++ };
        case TEST_START_FETCH:
            return { ...state, isFetch: true };
        default:
            return state;
    }
};

export default reducer;

export function testIncrement() {
    return {
        type: TEST_INCREMENT
    }
}

export function startFetch() {
    console.log('startFetch called')
    return {
        type: TEST_START_FETCH
    }
}
