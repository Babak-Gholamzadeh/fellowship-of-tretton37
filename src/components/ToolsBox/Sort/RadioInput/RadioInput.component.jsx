import React from 'react';

import './RadioInput.style.scss';

const RadioInput = ({label, ...rest}) => {
  return (
    <div className="radio-input-wrapper">
      <input
        type="radio"
        {...rest}
      />
      <label htmlFor={rest.id}>{label}</label>
    </div>
  );
};

export default RadioInput;
