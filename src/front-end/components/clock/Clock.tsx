import React, {useEffect, useState} from 'react';
import './Clock.scss';
import {loadGameState, addToClock, saveGameState} from '../../../back-end/api';

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

  const [state, setState] = useState<{minute: number; hour: number}>(dayStartState);

  useEffect(() => {
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
    }, clockIntervalDurationInMsecs);
  }, []);

  return (
    <div className="clock">
      <div className="hand hour" style={{transform: `translate(-50%) rotate(${state.hour}deg)`}}></div>
      <div className="hand minute" style={{transform: `translate(-50%) rotate(${state.minute}deg)`}}></div>
    </div>
  );
};
