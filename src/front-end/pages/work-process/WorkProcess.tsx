import React from 'react';
import {CharWindow} from '../../components/charWindow/CharWindow';
import {TaskWindow} from '../../components/taskWindow/TaskWindow';
import './WorkProcess.scss';
import {randomProblem} from '../../../back-end/language/api';
import {createGameState} from '../../../back-end/api';

export const WorkProcess = () => {
  const state = createGameState();
  const problem = randomProblem(state, 10);

  const descripton: string = problem.description();
  const code: string = problem.code();
  const usedPiecesDescriptions = problem.usedPiecesDescriptions();
  for (const part of usedPiecesDescriptions) {
    console.log(part.name, part.description);
  }
  return (
    <div className="work">
      <div className="work__inner">
        <TaskWindow description={descripton} code={code} />
        <CharWindow />
      </div>
    </div>
  );
};
