import React from 'react'
import { shallow } from 'enzyme'

import Movie from './movie-details-item.component'

test('Displays movie-details-item', () => {
    const wrapper = shallow(<Movie movie={{ title: 'test', kek: 12 }} />);
    expect(wrapper.props().children).toEqual('test');
});