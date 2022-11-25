import React from 'react';
import './Work.scss';
import {loadGameState} from '../../../../back-end/api';

export const Work = () => {
  const currentTheme = loadGameState().currentTheme;
  if (currentTheme === null) {
    throw new Error('Theme cannot be null here');
  }
  return (
    <div
      className="work"
      style={{
        backgroundImage: `url(${currentTheme.work})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};
