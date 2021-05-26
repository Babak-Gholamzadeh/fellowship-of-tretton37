import React from 'react';
import { shallow } from 'enzyme';
import ToolsBox from './ToolsBox.component';
import Sort from './Sort/Sort.component';
import Filter from './Filter/Filter.component';

describe('ToolsBox', () => {
  it('should contain Sort and Filter', () => {
    const wrapper = shallow(<ToolsBox />);
    const sort = wrapper.find(Sort);
    const filter = wrapper.find(Filter);

    expect(sort.exists()).toBe(true);
    expect(filter.exists()).toBe(true);
  });
});
