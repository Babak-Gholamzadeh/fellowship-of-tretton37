import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter.component';
import TextInput from './TextInput/TextInput.component';

describe('Filter', () => {
  it('should return the text of label correctly', () => {
    const wrapper = shallow(<Filter filterOptions={{}}/>);
    const labelEl = wrapper.find('.label');

    expect(labelEl.text()).toBe('Filter by:');
  });

  it('should contains TextInput', () => {
    const wrapper = shallow(<Filter filterOptions={{}}/>);
    const textInput = wrapper.find(TextInput);

    expect(textInput.exists()).toBe(true);
  });
});
