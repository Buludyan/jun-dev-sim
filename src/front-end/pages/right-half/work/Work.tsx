import React from 'react';
import './Work.scss';

import {nextTheme, loadGameState} from '../../../../back-end/api';

export const Work = () => {
  // TODO: remove nextTheme function from here, and move it to the start of day function
  const currentTheme = nextTheme(loadGameState());
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
