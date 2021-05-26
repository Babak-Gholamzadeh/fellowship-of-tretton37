import React from 'react';
import { shallow } from 'enzyme';
import ToolsBox from './ToolsBox.component';
import Sort from './Sort/Sort.component';

describe('ToolsBox', () => {
  it('should contain Sort', () => {
    const wrapper = shallow(<ToolsBox />);
    const sort = wrapper.find(Sort);

    expect(sort.exists()).toBe(true);
  });
});
