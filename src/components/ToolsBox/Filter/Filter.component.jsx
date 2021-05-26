import React from 'react';
import TextInput from './TextInput/TextInput.component';

import './Filter.style.scss';

const Filter = ({ filterBy, filterOptions }) => {
  return (
    <div className="filter-area">
      <span className="label">Filter by:</span>
      <TextInput
        label="name"
        id="filter-name"
        name="name"
        value={filterOptions.name}
        onChange={(e) => filterBy({ ...filterOptions, name: e.target.value })}
      />
      <TextInput
        label="Office"
        id="filter-office"
        name="office"
        value={filterOptions.office}
        onChange={(e) => filterBy({ ...filterOptions, office: e.target.value })}
      />
      <TextInput
        label="contact link"
        id="filter-contact"
        name="contact"
        value={filterOptions.contact}
        onChange={(e) => filterBy({ ...filterOptions, contact: e.target.value })}
      />
    </div>
  );
};

export default Filter;
