import React from 'react';
import './CharWindow.scss';
import background from '../../../assets/charachter_work.jpg';
import {Clock} from '../clock/Clock';
import {HelpWebsite} from '../helpWebsite/HelpWebsite';

import {nextTheme, loadGameState} from '../../../back-end/api';

export const CharWindow = () => {
  const currentTheme = nextTheme(loadGameState());

  return (
    <div className="charWindow">
      <div
        className="charWindow__inner"
        style={{
          backgroundImage: `url(${currentTheme.work})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Clock />
      </div>
      <HelpWebsite />
    </div>
  );
};
