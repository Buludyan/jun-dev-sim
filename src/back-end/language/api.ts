export * from './exports';
import {InterfacesNamespace} from './interfaces';
import {LanguageContextNamespace} from './languageContext';
import {ProblemNamespace} from './problem';
import ILanguageContext = InterfacesNamespace.ILanguageContext;
import LanguageContext = LanguageContextNamespace.LanguageContext;
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;

import {GameStateNamespace} from '../gameState';

export const _randomProblem = (context: ILanguageContext, difficulty: number) => {
  return context.createPiece(ProblemNamespace.Problem, difficulty);
};

export const randomProblem = (difficulty: number) => {
  const context: LanguageContext = new LanguageContext();
  return _randomProblem(context, difficulty);
};
