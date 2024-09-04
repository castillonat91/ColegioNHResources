import React, { useState } from 'react';
import './añadirButton.css'; 

const AñadirButton = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button 
      className={`custom-btn ${isActive ? 'is_active' : ''}`} 
      onClick={handleClick}
    >
      {label}
      <div className="success">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756">
          <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z"/>
        </svg>
      </div>
    </button>
  );
};

export default AñadirButton;
