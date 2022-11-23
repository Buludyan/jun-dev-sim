import React from 'react';
import './CharWindow.scss';
import {Clock} from '../clock/Clock';

import {nextTheme, loadGameState} from '../../../back-end/api';
import {useAppSelector} from '../../hooks/storeSelector';

export const CharWindow = () => {
  const {isLunchTime} = useAppSelector(state => state.timeProcess);
  const gameState = loadGameState();
  const currentTheme = nextTheme(loadGameState());

  return (
    <div className="charWindow">
      <div
        className="charWindow__inner"
        style={{
          backgroundImage: `url(${isLunchTime ? gameState.currentTheme?.lunch : currentTheme.work})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Clock />
      </div>
    </div>
  );
};
