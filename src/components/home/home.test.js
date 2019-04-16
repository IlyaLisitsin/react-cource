import React from 'react';
// import renderer from 'react-test-renderer';
// import { Provider } from 'react-redux';
import { BrowserRouter  } from 'react-router-dom';
import { shape } from 'prop-types';
import { shallow } from 'enzyme';

import Home from './home.component';
// import createStore from '../../store';


// const store = createStore();

const router = {
    history: new BrowserRouter({ children: 'dads' }).history,
    route: {
        location: {},
        match: {},
    },
};

const createContext = () => ({
    context: { router },
    childContextTypes: { router: shape({}) },
});

export function shallowWrap(node) {
    return shallow(node, createContext());
}

test('renders Home correctly', () => {
    // const tree = renderer.create(
    //     <Provider store={store}>
    //         <BrowserRouter>
    //             <Home />
    //         </BrowserRouter>
    //     </Provider>
    //     ).toJSON();

    const wrapper = shallowWrap(<Home />);

    expect(wrapper).toMatchSnapshot();
});