import {TypesNamespace} from './types';

import ProblemInformation = TypesNamespace.ProblemInformation;

export namespace GameStateNamespace {
  export class GameState {
    currentProblem: ProblemInformation | null = null;
    constructor() {}
  }
}
