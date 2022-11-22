import React from 'react';
import {CharWindow} from '../../components/charWindow/CharWindow';
import {TaskWindow} from '../../components/taskWindow/TaskWindow';
import './WorkProcess.scss';
import {loadGameState, randomProblem} from '../../../back-end/api';
import {TypesNamespace} from '../../../back-end/types';
import {HelpWebsite} from '../../components/helpWebsite/HelpWebsite';

export const WorkProcess = () => {
  const state = loadGameState();
  const problem = randomProblem(state, 10);

  const description: string = problem.description;
  const code: string = problem.code;
  const usedPiecesDescriptions = problem.usedPiecesDescriptions;

  console.log(description, code, usedPiecesDescriptions);
  const problem2 = JSON.parse(JSON.stringify(problem)) as TypesNamespace.ProblemInformation;
  console.log(problem2.description, problem2.code, problem2.usedPiecesDescriptions);


  for (const part of usedPiecesDescriptions) {
    console.log(part.name, part.description);
  }

  return (
    <div className="work">
      <div className="work__inner">
        <TaskWindow description={description} code={code} />
        <CharWindow />
        <HelpWebsite pieces={usedPiecesDescriptions} />
      </div>
    </div>
  );
};
