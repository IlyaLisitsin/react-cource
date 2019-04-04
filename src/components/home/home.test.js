import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";

import Home from './home.component';
import store from "../../store";

test('renders Home correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Home />
        </Provider>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});