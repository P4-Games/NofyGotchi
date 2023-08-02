// components/ButtonBar.js
import React from 'react';
import buttonStyles from '../styles/Button.module.css';

const ButtonBar = ({ buttons }) => {
  return (
    <div className={buttonStyles.buttonContainer}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`${buttonStyles.button} ${buttonStyles[`button-${button.color}`]}`}
          onClick={button.onClick}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonBar;
