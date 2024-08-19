import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Toast = ({ message, type }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000); // Hide the toast after 3 seconds
    }
  }, [message]);

  return (
    <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show ? 'show' : ''}`} style={{ zIndex: 11 }}>
      <div className={`toast align-items-center text-white bg-${type} border-0`} role="alert">
        <div className="d-flex">
          <div className="toast-body">
            {message}
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setShow(false)} aria-label="Close"></button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
