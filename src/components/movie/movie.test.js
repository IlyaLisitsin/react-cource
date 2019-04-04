import React from 'react'
import { shallow } from 'enzyme'

import Movie from './movie.component'

test('Displays movie', () => {
    const wrapper = shallow(<Movie movie={{ title: 'test', kek: 12 }} />);
    expect(wrapper.props().children).toEqual('test');
});