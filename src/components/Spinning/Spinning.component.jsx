import React from 'react';
import ReactDom from 'react-dom';

import './Spinning.style.scss';

const Spinning = () => {
  return ReactDom.createPortal(
    <div className="spinning-wrapper">
      <div className="spinning"></div>
    </div>,
    document.getElementById('portal')
  );
};

export default Spinning;
