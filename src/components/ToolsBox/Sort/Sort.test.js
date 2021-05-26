import React from 'react';
import { shallow } from 'enzyme';
import Sort from './Sort.component';
import RadioInput from './RadioInput/RadioInput.component';

describe('Sort', () => {
  const sortBy = () => {};
  it('should contain the required elements', () => {
    const wrapper = shallow(<Sort sortBy={sortBy}/>);

    expect(wrapper.exists('.label')).toBe(true);
    expect(wrapper.exists('.options')).toBe(true);
  });

  it('should return the text of label correctly', () => {
    const wrapper = shallow(<Sort sortBy={sortBy}/>);
    const labelEl = wrapper.find('.label');

    expect(labelEl.text()).toBe('Sort by:');
  });

  it('should contains RadioInput', () => {
    const wrapper = shallow(<Sort sortBy={sortBy}/>);
    const radioInput = wrapper.find(RadioInput);

    expect(radioInput.exists()).toBe(true);
  });

});
