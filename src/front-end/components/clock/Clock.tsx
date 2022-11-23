import React, {useEffect, useState} from 'react';
import './Clock.scss';
import {loadGameState, updateClock, dayStartInMinutes} from '../../../back-end/api';

export const minutesToDegree = (minutes: number): {hour: number; minute: number} => {
  const hours = minutes / 60;
  const passedMinutesFromHour = minutes - Math.floor(hours) * 60;
  const toReturn = {
    hour: hours * 30,
    minute: minutes * 6,
  };
  return toReturn;
};

export const Clock = () => {
  const dayStartState = minutesToDegree(dayStartInMinutes());
  const [state, setState] = useState<{minute: number; hour: number}>(dayStartState);

  // const setClock = () => {
  //   // TODO: refine
  //   // TODO: move to config file
  //   const oneHourElapseTimeInSeconds = 15;
  //   const timeCoef = oneHourElapseTimeInSeconds * 100;
  //   setState({
  //     minute: (state.minute += 1 / timeCoef),
  //     hour: (state.hour += 1 / timeCoef / 12),
  //   });
  // };

  useEffect(() => {
    const clockIntervalDurationInMsecs = 10;
    let msecsBegin = Date.now();
    setInterval(() => {
      const gameState = loadGameState();
      const msecsEnd = Date.now();
      const msecsDuration = msecsEnd - msecsBegin;
      msecsBegin = msecsEnd;
      updateClock(gameState, msecsDuration);
      const clock = gameState.currentClock;
      if (clock === null) {
        throw new Error('Clock cannot be null here');
      }
      setState(minutesToDegree(clock.currentInGameMinutes));
    }, clockIntervalDurationInMsecs);
  }, []);

  return (
    <div className="clock">
      <div className="hand hour" style={{transform: `translate(-50%) rotate(${state.hour}deg)`}}></div>
      <div className="hand minute" style={{transform: `translate(-50%) rotate(${state.minute}deg)`}}></div>

      <div className="number number1">
        <div>1</div>
      </div>
      <div className="number number2">
        <div>2</div>
      </div>
      <div className="number number3">
        <div>3</div>
      </div>
      <div className="number number4">
        <div>4</div>
      </div>
      <div className="number number5">
        <div>5</div>
      </div>
      <div className="number number6">
        <div>6</div>
      </div>
      <div className="number number7">
        <div>7</div>
      </div>
      <div className="number number8">
        <div>8</div>
      </div>
      <div className="number number9">
        <div>9</div>
      </div>
      <div className="number number10">
        <div>10</div>
      </div>
      <div className="number number11">
        <div>11</div>
      </div>
      <div className="number number12">
        <div>12</div>
      </div>
    </div>
  );
};
