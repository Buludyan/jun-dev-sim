import {homedir} from 'os';
import React, {useEffect} from 'react';
import {
  dayStartInMinutes,
  dayEndInMinutes,
  loadGameState,
  lunchEndInMinutes,
  lunchStartInMinutes,
  nextTheme,
  initiateClock,
} from '../../../back-end/api';
import {useAppSelector} from '../../hooks/storeSelector';
import {TypesNamespace} from '../../../back-end/types';
import {useActions} from '../../hooks/actions';

export const EventManager = () => {
  const {incrementEventsCount} = useActions();
  const {eventsCount} = useAppSelector(state => state.events);

  const home = () => {
    const gameState = loadGameState();
  };
  const lunch = () => {
    const gameState = loadGameState();
  };
  const meeting = () => {
    const gameState = loadGameState();
  };
  const work = () => {
    const gameState = loadGameState();
  };

  useEffect(() => {
    setInterval(() => {
      const gameState = loadGameState();
      const clock = gameState.currentClock;
      // console.log(`gameState=${JSON.stringify(gameState)}`);
      const currentGameScene: {
        home: boolean;
        lunch: boolean;
        meeting: boolean;
        work: boolean;
      } = {
        home: false,
        lunch: false,
        meeting: false,
        work: false,
      };
      if (clock === null) {
        if (gameState.currentDayState === TypesNamespace.DayState.Home) {
          currentGameScene.home = true;
        } else if (gameState.currentDayState === TypesNamespace.DayState.Meeting) {
          currentGameScene.meeting = true;
        } else {
          throw new Error(`Can't reach here, ${gameState.currentDayState}`);
        }
      } else {
        const currentMinute = clock.currentInGameMinutes;
        if (currentMinute < lunchStartInMinutes) {
          currentGameScene.work = true;
        } else if (currentMinute < lunchEndInMinutes) {
          currentGameScene.lunch = true;
        } else if (currentMinute < dayEndInMinutes) {
          currentGameScene.work = true;
        } else {
          currentGameScene.home = true;
        }
      }
      if (currentGameScene.home) {
        if (gameState.currentDayState !== TypesNamespace.DayState.Home) {
          gameState.currentDayState = TypesNamespace.DayState.Home;
          gameState.currentClock = null;
          incrementEventsCount();
        }
        home();
      }
      if (currentGameScene.lunch) {
        if (gameState.currentDayState !== TypesNamespace.DayState.Lunch) {
          gameState.currentDayState = TypesNamespace.DayState.Lunch;
          incrementEventsCount();
        }
        lunch();
      }
      if (currentGameScene.meeting) {
        if (gameState.currentDayState !== TypesNamespace.DayState.Meeting) {
          gameState.currentDayState = TypesNamespace.DayState.Meeting;
          incrementEventsCount();
          // TODO: lets suppose that this is the point of new day start,
          // need to refactor when day start will be more clear
          // setMeetingInProgress(true);
          // setHomeInProgress(false);
          // nextTheme(gameState);
        }
        meeting();
      }
      if (currentGameScene.work) {
        if (gameState.currentDayState !== TypesNamespace.DayState.Work) {
          // TODO: change to gameState.currentDayState !== TypesNamespace.DayState.Meeting
          if (gameState.currentDayState !== TypesNamespace.DayState.Lunch) {
            // TODO: move theme selection to the start of the day
            nextTheme(gameState);
            initiateClock(gameState);
          }
          gameState.currentDayState = TypesNamespace.DayState.Work;
          incrementEventsCount();
        }
        work();
      }
    }, 10);
  }, []);
  return <></>;
};
