import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './Home.component';
import * as api from '../../api';

describe.only('HomePage', () => {
  beforeEach(() => {
    jest.spyOn(api, 'useApi').mockImplementation(() => [{data: [], error: null, loading: null}, () => {}]);
  });

  it('should contain the basic elements for the page', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.find('.page-container').exists()).toBe(true);
    expect(wrapper.find('.page-container h1.page-title').exists()).toBe(true);
  });
});
