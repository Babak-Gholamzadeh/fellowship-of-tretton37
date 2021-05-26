import React from 'react';

import './TextInput.style.scss';

const TextInput = ({label, ...rest}) => {
  return (
    <div className="text-input-wrapper">
      <label htmlFor={rest.id}>{label}</label>
      <input
        type="text"
        {...rest}
      />
    </div>
  );
};

export default TextInput;
