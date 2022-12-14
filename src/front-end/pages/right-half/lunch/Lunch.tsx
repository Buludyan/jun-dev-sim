import React from 'react';
import './Lunch.scss';
import {loadGameState} from '../../../../back-end/api';

export const Lunch = () => {
  const currentTheme = loadGameState().currentTheme;
  if (currentTheme === null) {
    throw new Error('Theme cannot be null here');
  }
  return (
    <div
      className="lunch"
      style={{
        backgroundImage: `url(${currentTheme.lunch})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};
