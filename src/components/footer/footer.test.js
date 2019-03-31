import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './footer.component';

it('renders NotFound correctly when there are no items', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
});