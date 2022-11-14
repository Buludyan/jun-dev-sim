import React from 'react';
import './TaskWindow.scss';
import {randomProblem} from '../../../back-end/language/api';

export const TaskWindow = () => {
  const problem = randomProblem(10);
  return (
    <div className="taskWindow">
      <div className="taskWindow__inner">
        <div className="taskWindow__console">
          {/*<p>{JSON.stringify(problem)}</p>*/}
          <p className="taskWindow__problem">{problem.description()}</p>
          <p className="taskWindow__problem">{problem.code()}</p>
        </div>
        <div className="taskWindow__description"></div>
      </div>
    </div>
  );
};
