import React from 'react';
import './Button.css';

export const ButtonProps = {
CLEAR: 'Button',
RED: 'red',
GREEN: 'green',
BLUE: 'blue'
}

export const Button = ({theme, title, onHandler}) => (
  <button className={theme} data-testid="Button" onClick={onHandler}>
    {title}
  </button>
);
