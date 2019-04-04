import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from './not-found.component';

it('renders NotFound correctly', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
});