import React from 'react';
import ReactDom from 'react-dom';

import './ErrorMsg.style.scss';

const ErrorMsg = ({ children }) => {
  return ReactDom.createPortal(
    <div className="error-msg-wrapper">
      <div className="error-msg-container">
        <p className="message">
          {typeof children === 'string' ? children : 'Something wrong happend!'}
        </p>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default ErrorMsg;
