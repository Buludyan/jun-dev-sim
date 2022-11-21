import {randomIntFromInterval} from '../utils';
import {InterfacesNamespace} from './interfaces';
import {PrimitiveTypesNamespace} from './primitiveTypes';
import {AssignableNamespace} from './assignable';

import isAssignable = AssignableNamespace.isAssignable;
import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguagePieceName = InterfacesNamespace.LanguagePieceName;
import PrimitiveTypesType = InterfacesNamespace.PrimitiveTypesType;
import primitiveTypes = PrimitiveTypesNamespace.primitiveTypes;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;

export namespace LanguageContextNamespace {
  export class LanguageContext implements ILanguageContext {
    nextPieceNameIndex: number = 0;
    readonly pieceNames: ILanguagePieceName[] = [];
    constructor() {
      for (let i = 0; i < 10000; ++i) {
        this.pieceNames.push({
          name: `a${i}`,
        });
      }
    }

    private readonly allLanguagePieces: ILanguagePiece[] = [];

    readonly createPiece = <ProblemPiece extends ILanguagePiece>(
      piece: {
        new (context: ILanguageContext, difficulty: number): ProblemPiece;
      },
      difficulty: number
    ): ProblemPiece => {
      const problemPiece: ProblemPiece = new piece(this, difficulty);
      this.allLanguagePieces.unshift(problemPiece);
      return problemPiece;
    };

    readonly getAllPieces = () => this.allLanguagePieces;

    readonly generateValidPieceName = (): ILanguagePieceName => {
      return this.pieceNames[this.nextPieceNameIndex++];
    };

    readonly generateValidPrimitiveType = (): PrimitiveTypesType => {
      return primitiveTypes[randomIntFromInterval(0, primitiveTypes.length - 1)];
    };

    private readonly allValidVariablesToUse: ILanguageVariable[] = [];
    readonly registerValidVariablesToUse = (variables: ILanguageVariable): void => {
      this.allValidVariablesToUse.push(variables);
    };

    readonly getValidUsedVariable = (): ILanguageVariable | null => {
      const allVariablesLength = this.allValidVariablesToUse.length;

      let randomNumber = randomIntFromInterval(0, 1);
      let randomIndexOfAllVariables = -1;
      if (randomNumber === 0) {
        if (allVariablesLength === 0) {
          return null;
        }
        randomIndexOfAllVariables = randomIntFromInterval(0, allVariablesLength - 1);
      } else {
        const allPiecesLength = this.allLanguagePieces.length;
        let randomIndexOfAllPieces = randomIntFromInterval(0, allPiecesLength - 1);
        let numberOfRetries = 100;
        while (!isAssignable(this.allLanguagePieces[randomIndexOfAllPieces]) && numberOfRetries !== 0) {
          numberOfRetries--;
          randomIndexOfAllPieces = randomIntFromInterval(0, this.allLanguagePieces.length - 1);
        }
        if (numberOfRetries !== 0) {
          const assignablePiece = this.allLanguagePieces[randomIndexOfAllPieces];
          if (!isAssignable(assignablePiece)) {
            throw new Error('this must be assignable');
          } else {
            assignablePiece.assignToVariable(this);
          }
          randomIndexOfAllVariables = this.allValidVariablesToUse.length - 1;
        } else {
          if (allVariablesLength === 0) {
            return null;
          }
          randomIndexOfAllVariables = randomIntFromInterval(0, allVariablesLength - 1);
        }
      }

      return this.allValidVariablesToUse[randomIndexOfAllVariables];
    };

    readonly validUsedVariableExists = (): boolean => {
      return this.getValidUsedVariable() !== null;
    };
  }
}
