import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './Home.component';
import ToolsBox from '../../components/ToolsBox/ToolsBox.component';
import CardList from '../../components/CardList/CardList.component';
import * as api from '../../api';

describe.only('HomePage', () => {
  beforeEach(() => {
    jest.spyOn(api, 'useApi').mockImplementation(() => [{data: [], error: null, loading: null}, () => {}]);
  });

  it('should contains the basic elements for the page', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.find('.page-container').exists()).toBe(true);
    expect(wrapper.find('.page-container h1.page-title').exists()).toBe(true);
  });

  it('should contains ToolsBox and CardList', () => {
    const wrapper = shallow(<HomePage />);
    const toolsBox = wrapper.find(ToolsBox);
    const cardList = wrapper.find(CardList);

    expect(toolsBox.exists()).toBe(true);
    expect(cardList.exists()).toBe(true);
  });

});
