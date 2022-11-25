import React from 'react';
import './Meeting.scss';
import {loadGameState} from '../../../../back-end/api';

export const Meeting = () => {
  const currentTheme = loadGameState().currentTheme;
  if (currentTheme === null) {
    throw new Error('Theme cannot be null here');
  }
  return (
    <div
      className="meeting"
      style={{
        backgroundImage: `url(${currentTheme.meeting})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};
