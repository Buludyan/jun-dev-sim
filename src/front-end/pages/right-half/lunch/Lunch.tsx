import React from 'react';
import './Lunch.scss';
import {loadGameState, nextTheme} from '../../../../back-end/api';

export const Lunch = () => {
  // TODO: remove nextTheme function from here, and move it to the start of day function
  const currentTheme = nextTheme(loadGameState());
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
