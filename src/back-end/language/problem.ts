import {IGuard, randomIntFromInterval} from '../utils';
import {InterfacesNamespace} from './interfaces';
import {LanguageContextNamespace} from './languageContext';
import {UtilsNamespace} from './utils';
import {FunctionNamespace} from './function/function';

import generateOneStatementsOfDifficulty = UtilsNamespace.generateOneStatementsOfDifficulty;
import generateStatementsTillDifficulty = UtilsNamespace.generateStatementsTillDifficulty;
import LanguageContext = LanguageContextNamespace.LanguageContext;
import ILanguageContext = InterfacesNamespace.ILanguageContext;
import IPieceGenerator = InterfacesNamespace.IPieceGenerator;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import PrimitiveTypesType = InterfacesNamespace.PrimitiveTypesType;
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;

export namespace ProblemNamespace {
  const problemTypeGuard = 'problemTypeGuard';
  export class Problem implements ILanguagePiece, IGuard<typeof problemTypeGuard> {
    readonly _guard: typeof problemTypeGuard = problemTypeGuard;
    protected static readonly allStatementGenerators: IPieceGenerator[] = [];
    public static readonly register = (statement: IPieceGenerator) => {
      this.allStatementGenerators.push(statement);
    };

    private readonly statements: ILanguagePiece[] = [];
    constructor(context: ILanguageContext, private difficulty: number) {
      this.statements = generateOneStatementsOfDifficulty(context, Problem.allStatementGenerators, difficulty);
    }
    readonly currentDifficulty = (): number => {
      return this.difficulty;
    };

    readonly description = (): string => {
      return `${this.statements.map(s => `Write ${s.description()}`).join('\n')}`;
    };
    readonly code = (): string => {
      return `${this.statements.map(s => s.code()).join('')}\n`;
    };
    readonly usedPiecesDescriptions = (): LanguagePieceDescription[] => {
      const allPieces = [
        {
          key: problemTypeGuard,
          name: 'Problem',
          description: 'To implement a problem implement all inner pieces // TODO',
        },
        ...this.statements.map(elem => elem.usedPiecesDescriptions()).flat(),
      ];
      return allPieces
        .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
        .filter((item, index) => allPieces.findIndex(elem => item.key === elem.key) === index);
    };
  }
}
