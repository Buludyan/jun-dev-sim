import {GameStateNamespace} from './gameState';
import {InterfacesNamespace} from './language/interfaces';
import {TypesNamespace} from './types';
import {randomProblem as _randomProblem} from './language/api';
import GameState = GameStateNamespace.GameState;
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;

import ProblemInformation = TypesNamespace.ProblemInformation;

export const createGameState = (): GameState => {
  return new GameState();
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
