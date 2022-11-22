import {GameStateNamespace} from './gameState';
import {InterfacesNamespace} from './language/interfaces';
import {TypesNamespace} from './types';
import {randomProblem as _randomProblem} from './language/api';
import GameState = GameStateNamespace.GameState;
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;

import ProblemInformation = TypesNamespace.ProblemInformation;
import {ThemesNamespace} from './themes/themes';
import allThemes = ThemesNamespace.allThemes;
import {randomIntFromInterval} from './utils';

let globalGameState: GameState | null = null;
const createNewGameState = (): GameState => {
  if (globalGameState === null) {
    globalGameState = {
      currentEnergy: 0,
      currentMoney: 0,
      currentMood: 0,
      currentMotivation: 0,
      currentProblem: null,
      currentTheme: null,
    };
  }
  return globalGameState;
};

export const saveGameState = () => {
  // TODO: implement
  return;
};
export const loadGameState = (): GameState => {
  // TODO: implement
  return createNewGameState();
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
