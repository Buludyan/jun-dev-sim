import React, {useEffect} from 'react';
import {loadGameState, lunchEndInMinutes, lunchStartInMinutes} from '../../../back-end/api';
import {useActions} from '../../hooks/actions';

export const EventManager = () => {
  const {setWorkInProgress, setLunchInProgress} = useActions();
  useEffect(() => {
    setInterval(() => {
      const gameState = loadGameState();
      const clock = gameState.currentClock;
      if (clock === null) {
        throw new Error('Clock cannot be null here');
      }

      const Eps = 1;
      if (Math.abs(clock.currentInGameMinutes - lunchStartInMinutes) < Eps) {
        setLunchInProgress(true);
        setWorkInProgress(false);
      }

      if (Math.abs(clock.currentInGameMinutes - lunchEndInMinutes) < Eps) {
        setLunchInProgress(false);
        setWorkInProgress(true);
      }

      // if(lunchStartInMinutes < clock.currentInGameMinutes && clock.currentInGameMinutes < lunchEndInMinutes) {
      //   setLunchInProgress(true);
      //   setWorkInProgress(false);
      //   lunch();
      // }
    }, 10);
  }, []);
  return <></>;
};
