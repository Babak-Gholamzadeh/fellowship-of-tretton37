import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import HomePage from './pages/Home/Home.component';
import * as api from './api';

describe('App', () => {
  beforeEach(() => {
    jest.spyOn(api, 'useApi').mockImplementation(API => ([{data: [], error: null, loading: null}, () => {}]));
  });

  it('should contain HomePage', () => {
    const wrapper = shallow(<App />);
    const homePage = wrapper.find(HomePage);

    expect(homePage.exists()).toBe(true);
  });

});
