import {randomProblem as _randomProblem} from './language/api';
import {InterfacesNamespace} from './language/interfaces';
import {ThemesNamespace} from './themes/themes';
import {ClockNamespace} from './clock/clock';
import {GameStateNamespace} from './gameState';
import {randomIntFromInterval, safeTextToFile, extractWholeTextFromFile} from './utils';
import {TypesNamespace} from './types';

import GameState = GameStateNamespace.GameState;
import GameStateVersion = GameStateNamespace.GameStateVersion;
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;
import ProblemInformation = TypesNamespace.ProblemInformation;
import DayState = TypesNamespace.DayState;
import allThemes = ThemesNamespace.allThemes;
import inGameMinutePerRealMsecs = ClockNamespace.inGameMinutePerRealMsecs;
export import dayStartInMinutes = ClockNamespace.dayStartInMinutes;
export import lunchStartInMinutes = ClockNamespace.lunchStartInMinutes;
export import lunchEndInMinutes = ClockNamespace.lunchEndInMinutes;

let globalGameState: GameState | null = null;
export const createNewGameState = (): GameState => {
  if (globalGameState === null) {
    globalGameState = {
      stateVersion: GameStateVersion.V1,
      currentEnergy: 100,
      currentMoney: 0,
      currentMood: 0,
      currentMotivation: 0,
      currentProblem: null,
      currentProblemSolution: null,
      currentTheme: null,
      currentClock: {
        realMsecsPassed: 0,
        currentInGameMinutes: 0,
      },
      currentDayNumber: 0,
      currentDayState: DayState.Work,
    };
  }
  return globalGameState;
};

export const saveGameState = () => {
  if (globalGameState === null) {
    return;
  }
  safeTextToFile('/save.txt', JSON.stringify(globalGameState, null, 2));
};
export const loadGameState = (): GameState => {
  if (globalGameState !== null) {
    return globalGameState;
  }
  try {
    const saveAsText = extractWholeTextFromFile('/save.txt');
    // TODO: handle another versions here
    const state = JSON.parse(saveAsText) as GameState;
    globalGameState = state;
    console.log(state);
    return state;
  } catch {
    return createNewGameState();
  }
  // TODO: implement
};
export const updateGameState = (gameState: GameState) => {
  globalGameState = gameState;
};

export const randomProblem = (gameState: GameState, difficulty: number) => {
  const problem = _randomProblem(difficulty);
  const problemInformation: ProblemInformation = {
    code: problem.code(),
    currentDifficulty: problem.currentDifficulty(),
    description: problem.description(),
    usedPiecesDescriptions: problem.usedPiecesDescriptions(),
  };
  gameState.currentProblem = problemInformation;
  return problemInformation;
};

// TODO: redesign
let currentThemeIndex = -1;
export const nextTheme = (gameState: GameState) => {
  const allThemesArray = allThemes();
  currentThemeIndex = randomIntFromInterval(0, allThemesArray.length - 1);
  gameState.currentTheme = allThemesArray[currentThemeIndex];
  return gameState.currentTheme;
};

// TODO: add initiateClock
export const addToClock = (gameState: GameState, passedTimeInMsecs: number) => {
  if (gameState.currentClock === null) {
    throw new Error('trying to update clock without being initialized');
  }
  gameState.currentClock.realMsecsPassed += passedTimeInMsecs;
  gameState.currentClock.currentInGameMinutes =
    dayStartInMinutes + gameState.currentClock.realMsecsPassed * inGameMinutePerRealMsecs;
};

// TODO: move to some utils file
export const weekDayNames = (dayNumber: number) => {
  return ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'][dayNumber % 7];
};
