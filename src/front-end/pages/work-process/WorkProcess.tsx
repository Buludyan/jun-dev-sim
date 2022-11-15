import React from 'react';
import {CharWindow} from '../../components/charWindow/CharWindow';
import {TaskWindow} from '../../components/taskWindow/TaskWindow';
import './WorkProcess.scss';
import {randomProblem} from '../../../back-end/language/api';

export const WorkProcess = () => {
  const problem = randomProblem(10);
  const descripton: string = problem.description();
  const code: string = problem.code();
  return (
    <div className="work">
      <div className="work__inner">
        <TaskWindow description={descripton} code={code} />
        <CharWindow />
      </div>
    </div>
  );
};
