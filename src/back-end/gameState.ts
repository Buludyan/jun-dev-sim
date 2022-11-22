import {Mixin} from 'react';
import {TypesNamespace} from './types';

import ProblemInformation = TypesNamespace.ProblemInformation;
import GameTheme = TypesNamespace.GameTheme;

export namespace GameStateNamespace {
  export type GameState = {
    currentProblem: ProblemInformation | null;
    currentTheme: GameTheme | null;
    currentMood: number;
    currentMotivation: number;
    currentMoney: number;
    currentEnergy: number;
  };
}
