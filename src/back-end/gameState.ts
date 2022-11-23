import {Mixin} from 'react';
import {TypesNamespace} from './types';
import {ThemesNamespace} from './themes/themes';
import {ClockNamespace} from './clock/clock';

import ProblemInformation = TypesNamespace.ProblemInformation;
import Theme = ThemesNamespace.Theme;
import Clock = ClockNamespace.Clock;

export namespace GameStateNamespace {
  export type GameState = {
    currentProblem: ProblemInformation | null;
    currentTheme: Theme | null;
    currentMood: number;
    currentMotivation: number;
    currentMoney: number;
    currentEnergy: number;
    currentClock: Clock | null;
  };
}
