import React from 'react';
import {loadGameState, randomProblem} from '../../../back-end/api';
import {useAppSelector} from '../../hooks/storeSelector';
import {HelpWebsite} from './help-website/HelpWebsite';
import {Lunch} from './lunch/Lunch';
import './RightHalf.scss';
import {Work} from './work/Work';

export const RightHalf = () => {
  const state = loadGameState();
  const problem = state.currentProblem ?? randomProblem(state, 10);

  const {isLunchInProgress, isWorkInProgress} = useAppSelector(state => state.events);

  const usedPiecesDescriptions = problem.usedPiecesDescriptions;

  return (
    <div className="rightHalf">
      {isWorkInProgress && <Work />}
      {isLunchInProgress && <Lunch />}
      <HelpWebsite pieces={usedPiecesDescriptions} />
    </div>
  );
};
