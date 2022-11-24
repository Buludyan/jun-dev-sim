import {Mixin} from 'react';
import {TypesNamespace} from './types';
import {ThemesNamespace} from './themes/themes';
import {ClockNamespace} from './clock/clock';

import ProblemInformation = TypesNamespace.ProblemInformation;
import DayState = TypesNamespace.DayState;
import Theme = ThemesNamespace.Theme;
import Clock = ClockNamespace.Clock;

export namespace GameStateNamespace {
  export enum GameStateVersion {
    V1 = 'V1',
  }
  export type GameState = {
    stateVersion: GameStateVersion;
    currentProblem: ProblemInformation | null;
    currentProblemSolution: string | null;
    currentTheme: Theme | null;
    currentMood: number;
    currentMotivation: number;
    currentMoney: number;
    currentEnergy: number;
    currentClock: Clock | null;
    currentDayNumber: number;
    currentDayState: DayState;
  };
}
