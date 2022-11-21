import {ProblemNamespace} from '../language/problem';

import Problem = ProblemNamespace.Problem;

export namespace IGameStateNamespace {
  export interface IGameState {
    currentProblem: Problem | null;
  }
}
