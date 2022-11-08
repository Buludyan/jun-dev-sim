import {Difficulty} from './difficulty';
import {primitiveTypes} from './primitiveTypes';

export interface ILanguageContext {
    readonly createPiece: <ProblemPiece extends ILanguagePiece>(
        piece: {
            new (context: ILanguageContext, difficulty: number): ProblemPiece;
        },
        difficulty: number
    ) => ProblemPiece;
    readonly generateValidPieceName: () => ILanguagePieceName;
    readonly generateValidPrimitiveType: () => PrimitiveTypesType;
}

export interface ILanguageVariable {
    readonly description: () => string;
    readonly code: () => string;
}

export interface ILanguagePiece {
    readonly description: () => string;
    readonly code: () => string;
    readonly assignToVariable: (context: ILanguageContext) => boolean;
    readonly relatedVariableName: (
        context: ILanguageContext
    ) => ILanguageVariable | null;
    // TODO: add links
    // TODO: add unlocks
}

export interface ILanguagePieceName {
    readonly name: string;
}

export interface IPieceGenerator {
    readonly generate: (
        context: ILanguageContext,
        difficulty: number
    ) => ILanguagePiece;
    readonly difficulty: (context: ILanguageContext) => Difficulty;
}

export interface IProblem {}

export type PrimitiveTypesType = typeof primitiveTypes[number];
