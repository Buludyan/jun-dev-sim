import React from 'react';
import './Home.scss';
import {loadGameState} from '../../../../back-end/api';

export const Home = () => {
  const currentTheme = loadGameState().currentTheme;
  if (currentTheme === null) {
    throw new Error('Theme cannot be null here');
  }
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${currentTheme.home})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};
