import React, { useRef } from 'react';
import './cancelButton.css';  

const CancelButton = () => {
  const buttonRef = useRef(null);

  const toggleClass = () => {
    buttonRef.current.classList.toggle('active');
  };

  const addClass = () => {
    buttonRef.current.classList.add('finished');
  };

  return (
    <button
      ref={buttonRef}
      className="button cancel"
      onClick={toggleClass}
      onTransitionEnd={() => {
        toggleClass();
        addClass();
      }}
    >
      <span className="submit">Cancel</span>
      <span className="loading"><i className="fa fa-refresh"></i></span>
      <span className="check"><i className="fa fa-times"></i></span>
    </button>
  );
};

export default CancelButton;
