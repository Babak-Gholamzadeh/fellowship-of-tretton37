import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import HomePage from './pages/Home/Home.component';

describe('App', () => {
  it('should contains HomePage', () => {
    const wrapper = shallow(<App />);
    const homePage = wrapper.find(HomePage);

    expect(homePage.exists()).toBe(true);
  });
});
