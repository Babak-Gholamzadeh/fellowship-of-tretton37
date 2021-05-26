import React from 'react';
import RadioInput from './RadioInput/RadioInput.component';

import './Sort.style.scss';

const Sort = ({ sortBy, sortOption }) => {
  return (
    <div className="sort-area">
      <span className="label">Sort by:</span>
      <div className="options">
        <RadioInput
          label="name"
          id="sort-name"
          name="sort-by"
          value="name"
          onChange={sortBy.bind(null, 'name')}
          checked={sortOption === 'name'}
        />
        <RadioInput
          label="office"
          id="sort-office"
          name="sort-by"
          value="office"
          onChange={sortBy.bind(null, 'office')}
          checked={sortOption === 'office'}
        />
      </div>
    </div>
  );
};

export default Sort;
