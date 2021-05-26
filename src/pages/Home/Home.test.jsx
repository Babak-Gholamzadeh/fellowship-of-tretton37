import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './Home.component';

describe.only('HomePage', () => {
  it('should contains the basic elements for the page', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.find('.page-container').exists()).toBe(true);
    expect(wrapper.find('.page-container h1.page-title').exists()).toBe(true);
  });
});
