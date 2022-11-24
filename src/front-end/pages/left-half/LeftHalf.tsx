import React from 'react';
import {loadGameState, randomProblem} from '../../../back-end/api';
import './LeftHalf.scss';
import {Task} from './task/Task';

export const LeftHalf = () => {
  const state = loadGameState();
  const problem = state.currentProblem ?? randomProblem(state, 10);

  const description: string = problem.description;
  const code: string = problem.code;

  return (
    <div className="leftHalf">
      <Task description={description} code={code} />
    </div>
  );
};
