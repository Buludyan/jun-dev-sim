import React from 'react';
import './CharWindow.scss';
import background from '../../assets/charachter_work.jpg';
import {Clock} from '../clock/Clock';
import {HelpWebsite} from '../helpWebsite/HelpWebsite';

export const CharWindow = () => {
  return (
    <div className="charWindow">
      <div
        className="charWindow__inner"
        style={{
          backgroundImage: `url(${background})`,
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
