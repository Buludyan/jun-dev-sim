export * from './exports';
import {InterfacesNamespace} from './interfaces';
import {LanguageContextNamespace} from './languageContext';
import {ProblemNamespace} from './problem';
import ILanguageContext = InterfacesNamespace.ILanguageContext;
import LanguageContext = LanguageContextNamespace.LanguageContext;

import {IGameStateNamespace} from '../interfaces/gameState';
import IGameState = IGameStateNamespace.IGameState;

export const _randomProblem = (context: ILanguageContext, difficulty: number) => {
  return context.createPiece(ProblemNamespace.Problem, difficulty);
};

export const randomProblem = (gameState: IGameState, difficulty: number) => {
  const context: LanguageContext = new LanguageContext();
  gameState.currentProblem = _randomProblem(context, difficulty);
  return gameState.currentProblem;
};
