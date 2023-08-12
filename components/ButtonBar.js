// components/ButtonBar.js
import React from 'react';
import buttonStyles from '../styles/Button.module.css';

const ButtonBar = ({ buttons, isPerformingAction }) => {
  const handleButtonClick = (onClick) => {
    if (isPerformingAction) {
      alert('Butty is currently busy! Please wait.'); // Puedes reemplazar esto con un toast o un modal si prefieres.
    } else {
      onClick();
    }
  }

  return (
    <div className={buttonStyles.buttonContainer}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`${buttonStyles.button} ${buttonStyles[`button-${button.color}`]} ${isPerformingAction ? buttonStyles.disabledButton : ''}`}
          onClick={() => handleButtonClick(button.onClick)}
          disabled={isPerformingAction}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonBar;