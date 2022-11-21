import {IGameStateNamespace} from '../interfaces/gameState';
import {randomProblem} from '../language/api';
import {ProblemNamespace} from '../language/problem';

import IGameState = IGameStateNamespace.IGameState;
import Problem = ProblemNamespace.Problem;

export namespace GameStateNamespace {
  export class GameState implements IGameState {
    currentProblem: Problem | null = null;
    constructor() {}
  }
}
