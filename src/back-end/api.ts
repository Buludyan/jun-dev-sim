import {GameStateNamespace} from './gameState';
import {InterfacesNamespace} from './language/interfaces';
import {TypesNamespace} from './types';
import {randomProblem as _randomProblem} from './language/api';
import GameState = GameStateNamespace.GameState;
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;

import ProblemInformation = TypesNamespace.ProblemInformation;

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

export const nextTheme = (gameState: GameState) => {};
