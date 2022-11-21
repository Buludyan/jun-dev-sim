import {randomIntFromInterval} from '../utils';
import {DifficultyNamespace} from './difficulty';
import {InterfacesNamespace} from './interfaces';

import Difficulty = DifficultyNamespace.Difficulty;
import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import IPieceGenerator = InterfacesNamespace.IPieceGenerator;

export namespace UtilsNamespace {
  export const generateStatementsTillDifficulty = (
    context: ILanguageContext,
    allStatementGenerators: IPieceGenerator[],
    difficulty: number
  ): ILanguagePiece[] => {
    const statements: ILanguagePiece[] = [];
    const allLength = allStatementGenerators.length;
    if (allLength === 0) {
      throw new Error(`Unable to generate pieces, allStatementGenerators is empty`);
    }
    let numberOfFailedRetries = 100;
    while (difficulty > 0 && numberOfFailedRetries !== 0) {
      const index = randomIntFromInterval(0, allLength - 1);
      console.log(`index = ${index}`);
      const statementGenerator = allStatementGenerators[index];
      if (statementGenerator.canGenerate(context, difficulty)) {
        statements.push(statementGenerator.generateWithRandomDifficulty(context, difficulty));
        difficulty -= statements[statements.length - 1].currentDifficulty();
      } else {
        --numberOfFailedRetries;
      }
    }
    if (numberOfFailedRetries === 0) {
      throw new Error(`Couldn't generate problem :(`);
    }
    return statements;
  };

  export const generateOneStatementsOfDifficulty = (
    context: ILanguageContext,
    allStatementGenerators: IPieceGenerator[],
    difficulty: number
  ): ILanguagePiece[] => {
    const statements: ILanguagePiece[] = [];
    const allLength = allStatementGenerators.length;
    if (allLength === 0) {
      throw new Error(`Unable to generate pieces, allStatementGenerators is empty`);
    }
    let numberOfFailedRetries = 100;
    while (numberOfFailedRetries !== 0) {
      const index = randomIntFromInterval(0, allLength - 1);
      const statementGenerator = allStatementGenerators[index];
      if (statementGenerator.canGenerateOnlyOne(context, difficulty)) {
        statements.push(statementGenerator.generate(context, difficulty));
        break;
      } else {
        --numberOfFailedRetries;
      }
    }
    if (numberOfFailedRetries === 0) {
      throw new Error(`Couldn't generate problem :(`);
    }
    return statements;
  };

  export const createGenerator = <ProblemPiece extends ILanguagePiece>(
    piece: {
      new (context: ILanguageContext, difficulty: number): ProblemPiece;
    },
    rangedDifficulty: Difficulty,
    additionalConditionsOfCreation: ((context: ILanguageContext) => boolean) | null
  ): IPieceGenerator => {
    return {
      canGenerate: (context: ILanguageContext, difficulty: number): boolean => {
        const additionalCondition = additionalConditionsOfCreation ? additionalConditionsOfCreation(context) : true;
        return rangedDifficulty.canBeLess(difficulty) && additionalCondition;
      },
      canGenerateOnlyOne: (context: ILanguageContext, difficulty: number): boolean => {
        const additionalCondition = additionalConditionsOfCreation ? additionalConditionsOfCreation(context) : true;
        return rangedDifficulty.contain(difficulty) && additionalCondition;
      },
      generate: (context: ILanguageContext, difficulty: number): ILanguagePiece => {
        return context.createPiece(piece, difficulty);
      },
      generateWithRandomDifficulty: (context: ILanguageContext, difficulty: number): ILanguagePiece => {
        const difficultyOfThisStatement = rangedDifficulty.randomDifficultyThatFits(difficulty);
        return context.createPiece(piece, difficultyOfThisStatement);
      },
    };
  };
}
