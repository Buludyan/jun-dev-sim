import React, {useEffect, useState} from 'react';
import {useActions} from '../../hooks/actions';
import './Clock.scss';
import {
  loadGameState,
  addToClock,
  dayStartInMinutes,
  lunchStartInMinutes,
  lunchEndInMinutes,
  saveGameState,
} from '../../../back-end/api';
import {stat} from 'fs';

export const minutesToDegree = (minutes: number): {hour: number; minute: number} => {
  const hours = minutes / 60;
  const toReturn = {
    hour: hours * 30,
    minute: minutes * 6,
  };
  return toReturn;
};

export const Clock = () => {
  const gameState = loadGameState();
  const clock = gameState.currentClock;
  if (clock === null) {
    throw new Error('Clock cannot be null here');
  }
  const dayStartState = minutesToDegree(clock.currentInGameMinutes);
  // const {setLunchTime} = useActions();
  const [state, setState] = useState<{minute: number; hour: number}>(dayStartState);

  // useEffect(() => {
  // }, [lunchInProgress]);

  useEffect(
    () => {
      const clockIntervalDurationInMsecs = 10;
      let msecsBegin = Date.now();
      setInterval(() => {
        const gameState = loadGameState();
        const msecsEnd = Date.now();
        const msecsDuration = msecsEnd - msecsBegin;
        msecsBegin = msecsEnd;
        addToClock(gameState, msecsDuration);
        const clock = gameState.currentClock;
        if (clock === null) {
          throw new Error('Clock cannot be null here');
        }
        saveGameState();
        setState(minutesToDegree(clock.currentInGameMinutes));

        // TODO: move this to global space
        // const Eps = 0.001;
        // if (Math.abs(clock.currentInGameMinutes - lunchStartInMinutes()) < Eps) {
        //   setLunchInProgress(true);
        //   setWorkInProgress(false);
        // }

        // if (Math.abs(clock.currentInGameMinutes - lunchEndInMinutes()) < Eps) {
        //   setLunchTime(false);
        // }
      }, clockIntervalDurationInMsecs);
    },
    [
      /* workInProgress */
    ]
  );

  return (
    <div className="clock">
      <div className="hand hour" style={{transform: `translate(-50%) rotate(${state.hour}deg)`}}></div>
      <div className="hand minute" style={{transform: `translate(-50%) rotate(${state.minute}deg)`}}></div>
    </div>
  );
};
