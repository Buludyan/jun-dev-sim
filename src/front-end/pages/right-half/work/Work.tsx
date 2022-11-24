import React from 'react';
import './Work.scss';

import {nextTheme, loadGameState} from '../../../../back-end/api';
import {useAppSelector} from '../../../hooks/storeSelector';
import {Clock} from '../../../components/clock/Clock';

export const Work = () => {
  const {isLunchTime} = useAppSelector(state => state.timeProcess);
  // TODO: remove nextTheme function from here, and move it to the start of day function
  const currentTheme = nextTheme(loadGameState());
  return (
    <div
      className="work"
      style={{
        backgroundImage: `url(${isLunchTime ? currentTheme.lunch : currentTheme.work})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Clock />
    </div>
  );
};
