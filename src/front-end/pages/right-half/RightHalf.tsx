import React from 'react';
import {loadGameState, randomProblem} from '../../../back-end/api';
import {TypesNamespace} from '../../../back-end/types';
import {useAppSelector} from '../../hooks/storeSelector';
import {HelpWebsite} from './help-website/HelpWebsite';
import {Home} from './home/Home';
import {Lunch} from './lunch/Lunch';
import {Meeting} from './meeting/Meeting';
import './RightHalf.scss';
import {Work} from './work/Work';

export const RightHalf = () => {
  const state = loadGameState();
  const problem = state.currentProblem ?? randomProblem(state, 10);

  const {eventsCount} = useAppSelector(state => state.events);

  const usedPiecesDescriptions = problem.usedPiecesDescriptions;
  const gameState = loadGameState();
  return (
    <div className="rightHalf">
      {gameState.currentDayState === TypesNamespace.DayState.Work && <Work />}
      {gameState.currentDayState === TypesNamespace.DayState.Lunch && <Lunch />}
      {gameState.currentDayState === TypesNamespace.DayState.Home && <Home />}
      {gameState.currentDayState === TypesNamespace.DayState.Meeting && <Meeting />}
      <HelpWebsite pieces={usedPiecesDescriptions} />
    </div>
  );
};
