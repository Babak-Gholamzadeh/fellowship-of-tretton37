import React from 'react';
import Sort from './Sort/Sort.component';

import './ToolsBox.style.scss';

const ToolsBox = ({ sortBy, sortOption }) => {
  return (
    <div className="tools-box">
      <Sort sortBy={sortBy} sortOption={sortOption} />
    </div>
  );
};

export default ToolsBox;
