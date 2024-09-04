import React from 'react';
import PropTypes from 'prop-types';
import './button.css'; 

export const IniciarButton = ({ 
  label = 'Iniciar', 
  primary = false, 
  size = undefined, 
  backgroundColor = null, 
  onClick = () => {} 
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const sizeClass = size ? `button--${size}` : '';
  
  return (
    <button
      type="button"
      className={`iniciar-btn ${mode} ${sizeClass}`}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

IniciarButton.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default IniciarButton;
