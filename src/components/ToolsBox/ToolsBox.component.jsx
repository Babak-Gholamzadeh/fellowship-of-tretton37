import React from 'react';
import Sort from './Sort/Sort.component';
import Filter from './Filter/Filter.component';

import './ToolsBox.style.scss';

const ToolsBox = ({sortBy, sortOption, filterBy, filterOptions}) => {
  return (
    <div className="tools-box">
      <Sort sortBy={sortBy} sortOption={sortOption}/>
      <Filter filterBy={filterBy} filterOptions={filterOptions}/>
    </div>
  );
};

export default ToolsBox;
