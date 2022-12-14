import {DifficultyNamespace} from './difficulty';
import {PrimitiveTypesNamespace} from './primitiveTypes';

import Difficulty = DifficultyNamespace.Difficulty;
import primitiveTypes = PrimitiveTypesNamespace.primitiveTypes;

export namespace InterfacesNamespace {
  export interface ILanguageContext {
    readonly createPiece: <ProblemPiece extends ILanguagePiece>(
      piece: {
        new (context: ILanguageContext, difficulty: number): ProblemPiece;
      },
      difficulty: number
    ) => ProblemPiece;
    readonly generateValidPieceName: () => LanguagePieceName;
    readonly generateValidPrimitiveType: () => PrimitiveTypesType;
    readonly registerValidVariablesToUse: (variables: ILanguageVariable) => void;
    readonly getValidUsedVariable: () => ILanguageVariable | null;
    readonly validUsedVariableExists: () => boolean;
  }

  export type LanguagePieceName = {
    readonly name: string;
  };

  export type LanguagePieceDescription = {
    key: string;
    name: string;
    description: string;
  };

  export interface ILanguagePiece {
    readonly currentDifficulty: () => number;
    readonly description: () => string;
    readonly code: () => string;
    readonly usedPiecesDescriptions: () => LanguagePieceDescription[];
    // TODO: add links
    // TODO: add unlocks
  }

  export interface IPieceGenerator {
    readonly canGenerate: (context: ILanguageContext, difficulty: number) => boolean;
    readonly canGenerateOnlyOne: (context: ILanguageContext, difficulty: number) => boolean;
    readonly generate: (context: ILanguageContext, difficulty: number) => ILanguagePiece;
    readonly generateWithRandomDifficulty: (context: ILanguageContext, difficulty: number) => ILanguagePiece;
    // readonly difficulty: (context: ILanguageContext) => Difficulty;
  }

  export interface IProblem {}

  export type PrimitiveTypesType = typeof primitiveTypes[number];

  export interface ILanguageVariable {
    readonly description: () => string;
    readonly code: () => string;
    readonly getName: () => LanguagePieceName;
    readonly getType: () => PrimitiveTypesType;
  }
}
