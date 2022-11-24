import React from 'react';
import {loadGameState, randomProblem} from '../../../back-end/api';
import {HelpWebsite} from './help-website/HelpWebsite';
import './RightHalf.scss';
import {Work} from './work/Work';

export const RightHalf = () => {
  const state = loadGameState();
  const problem = state.currentProblem ?? randomProblem(state, 10);

  const usedPiecesDescriptions = problem.usedPiecesDescriptions;

  return (
    <div className="rightHalf">
      <Work />
      <HelpWebsite pieces={usedPiecesDescriptions} />
    </div>
  );
};
